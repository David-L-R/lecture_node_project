import axios from 'axios'
import PokemonService from '../src/services/pokemonService'
import pokemons from './mockPokemons.json'

// mocking the axios service
// cause we don't want
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Pokemon service', () => {
	test('Get all pokemons', async () => {
		// here we can check
	})

	test('Get some pokemons with valid limit and offset', async () => {
		// here we can check
	})

	test('Get some pokemons with valid limit and offset', async () => {
		// here we can check
	})

	test('Get an error when fetching some pokemons with a negative offset', async () => {
		// here we can check
	})

	// add more test here!
	// don't forget to check for each service function the success path and possible errors!
})
