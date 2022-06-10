/* UNIT TESTING IN THE BACKEND === TESTING EACH FUNCTIONALITY OF THE SERVICES */
import axios from 'axios'
import test_pokemons from './test_pokemons.json'
import PokemonService from '../src/services/pokemonService'

// CTRL --> SERVICE "GIVE ME DATA"
// SERVICE --> DB "GIVE ME DATA" // MOCK
// DB --> SERVICE "DATA // MOCK
// SERVICE "DO LOGIC" // TESTING THIS
// SERVICE --> CTRL "DATA" // TESTING THIS
// CTRL --> CLIENT "DATA"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Pokemon Service', () => {
	test('Get all pokemons', async () => {
		// const pokemons = await PokemonService.getAll()
		mockedAxios.get.mockResolvedValue({
			data: test_pokemons,
		})

		const pokemons = await PokemonService.getAll()

		expect(pokemons.length).not.toBe(0)
		expect(mockedAxios.get).toBeCalled()
	})

	// GREEN: Getting pokemons with setting limit and offset
	test('Get 10 pokemons using limit and offset', async () => {})

	// RED
	test('When limit or offset are invalid, they will be set to 0', async () => {})

	// RED
	test('No pokemon fetched when limit or offset set to negative numbers', async () => {})

	// GREEN
	test('Fetch 1 pokemon with a valid id', async () => {})

	// RED (id === 9)
	test('No pokemon is fetched when id does not exist', async () => {})

	// RED (id === d;slajr092u3rpfidsjahlkdsja)
	test('No pokemon is fetched when id is invalid', async () => {})

	// RED (id === -5)
	test('No pokemon is fetched when id is a negative number', async () => {})
})
