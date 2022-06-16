import axios, { AxiosError } from 'axios'
import pokemonService from '../src/services/pokemonService'
import pokemons from './mockAllPokemon.json'
import pokemon from './mockOnePokemon.json'

// mocking the axios service
// cause we don't want
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const TOTAL_AMOUNT_POKEMONS = 50

afterEach(() => {
	mockedAxios.get.mockClear()
	mockedAxios.post.mockClear()
	mockedAxios.put.mockClear()
	mockedAxios.delete.mockClear()
})

describe('Pokemon service', () => {
	test('Get all pokemons', async () => {
		mockedAxios.get.mockResolvedValue({
			data: {
				results: pokemons,
			},
		})

		const response = await pokemonService.getAll()

		const { results } = response

		expect(results).toHaveLength(TOTAL_AMOUNT_POKEMONS)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})

	test('Get some pokemons with valid limit and offset', async () => {
		mockedAxios.get.mockResolvedValue({
			data: {
				results: pokemons.slice(5, 10),
			},
		})

		const { results } = await pokemonService.getSome({ limit: 5, offset: 5 })

		expect(results).toHaveLength(5)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})

	test('Get error when offest exceeds number of pokemons', async () => {
		mockedAxios.get.mockResolvedValue({
			data: {
				results: [],
			},
		})

		const LIMIT = 0
		const OFFSET = 50000
		expect(pokemonService.getSome({ limit: LIMIT, offset: OFFSET })).rejects.toThrowError(
			`No pokemons were found with limit ${LIMIT} and offset ${OFFSET}`,
		)
	})

	test('Get an error when fetching some pokemons with a negative offset', async () => {
		const LIMIT = 0
		const OFFSET = -200

		expect(pokemonService.getSome({ limit: LIMIT, offset: OFFSET })).rejects.toThrowError()
	})

	test('Get some pokemons with negative limit', async () => {
		const NEGATIVE_LIMIT = -20

		mockedAxios.get.mockResolvedValue({
			data: {
				results: pokemons.slice(0, TOTAL_AMOUNT_POKEMONS + NEGATIVE_LIMIT),
			},
		})

		const response = await pokemonService.getSome({ limit: NEGATIVE_LIMIT, offset: 0 })

		const { results } = response

		expect(results).toHaveLength(30)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})

	test('Get error when a negative limit exceeds number of pokemons', async () => {
		mockedAxios.get.mockResolvedValueOnce({
			data: {
				results: [],
			},
		})

		const LIMIT = -50000
		const OFFSET = 0
		expect(pokemonService.getSome({ limit: LIMIT, offset: OFFSET })).rejects.toThrowError(
			`No pokemons were found with limit ${LIMIT} and offset ${OFFSET}`,
		)
	})

	test('get pokemon by id works', async () => {
		mockedAxios.get.mockResolvedValueOnce({
			data: pokemon,
		})
		const response = await pokemonService.getOneById({ id: 1 })
		expect(response.hasOwnProperty('abilities')).toBeTruthy()
		expect(response.moves.length).toBeGreaterThan(0)
		expect(Object.keys(response.sprites)).toHaveLength(10)
		expect(response.hasOwnProperty('abilities')).toBeTruthy()
		expect(mockedAxios.get).toBeCalledTimes(1)
	})
	test('get pokemon by id throw error when id does not exist', async () => {
		mockedAxios.get.mockRejectedValueOnce(new Error('Not Found'))

		try {
			await pokemonService.getOneById({ id: 8989583 })
		} catch (err) {
			if (err instanceof AxiosError) {
				expect(err?.response?.data).toEqual(new Error('Not Found'))
			}
			if (err instanceof Error) {
				expect(err?.message).toEqual('Not Found')
			}
		}
	})
})
