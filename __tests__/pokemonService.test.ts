import axios from 'axios'
import pokemonService from '../src/services/pokemonService'
import pokemons from './mockdata.json'

// mocking the axios service
// cause we don't want
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

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

		expect(results).toHaveLength(50)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})

	test('Get some pokemons with valid limit and offset', async () => {
		mockedAxios.get.mockResolvedValue({
			data: {
				results: pokemons.slice(5, 10),
			},
		})

		const response = await pokemonService.getSome({ limit: 5, offset: 5 })

		const { results } = response

		expect(results).toHaveLength(5)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})

	test('Get some pokemons when ', async () => {
		// here we can check
	})

	test('Get an error when fetching some pokemons with a negative offset', async () => {
		// here we can check
	})

	// add more test here!
	// don't forget to check for each service function the success path and possible errors!
})
