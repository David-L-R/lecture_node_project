import axios from 'axios'
import PokemonService from '../src/services/pokemon'
import pokemons from './mockdata.json'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Pokemon service', () => {
	test('Get all pokemons', async () => {
		mockedAxios.get.mockResolvedValue({
			data: {
				results: pokemons,
			},
		} as any)

		const response = await PokemonService.getAll()

		expect(response ? response.length : [].length).not.toBe(0)
		expect(mockedAxios.get).toBeCalled()
	})

	// test('searching pokemon with existing id should return pokemon', async () => {})

	test('searching pokemon with invalid id should return undefined', async () => {
		mockedAxios.get.mockResolvedValue({ data: 'Not Found' })

		const data = await PokemonService.getOneById(0)

		expect(mockedAxios.get).toBeCalled()
		expect(data).toBe(undefined)
	})
})
