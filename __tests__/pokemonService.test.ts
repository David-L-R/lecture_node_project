import axios from 'axios'
import PokemonService from '../src/services/pokemon'
import pokemons from './mockdata.json'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Pokemon service', () => {
	test('Get all pokemons', async () => {
		mockedAxios.get.mockResolvedValue({ data: pokemons } as any)

		const data = await PokemonService.getAll()

		expect(data ? data.length : [].length).not.toBe(0)
		expect(mockedAxios.get).toBeCalled()
	})
})
