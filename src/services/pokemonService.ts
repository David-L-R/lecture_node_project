/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import axios from 'axios'
import { POKEMON_API_BASE_URL } from '../config/infex'

export class PokemonService {
	async getAll() {
		const { data } = await axios.get(`${POKEMON_API_BASE_URL}pokemon?limit=100000&offset=0`)
		return data
	}
}
export default new PokemonService()

// DRY
// DONT REPEAT YOURSELF
