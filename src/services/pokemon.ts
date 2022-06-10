/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import axios from 'axios'
import config from '../../config'
import { Pokemon, PokemonPreview } from '../types/pokemon'

export class PokemonService {
	async getAll(): Promise<PokemonPreview[] | void> {
		try {
			const { data } = await axios.get(`${config.POKEMON_API_BASE_URL}pokemon?limit=100000&offset=0`)
			return data.results
		} catch (err) {
			console.error(err)
		}
	}
	// async getMany(limit: number, offset: number): Promise<Pokemon[]> {
	// 	return await axios.get(`${config.POKEMON_API_BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
	// }
	// getOneById(id: number) {}
	// getOneByName(name: string) {}
}
export default new PokemonService()
