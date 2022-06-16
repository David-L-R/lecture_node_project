/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import axios, { AxiosError } from 'axios'
import { POKEMON_API_BASE_URL } from '../config/infex'

export class PokemonService {
	async getAll() {
		const { data } = await axios.get(`${POKEMON_API_BASE_URL}pokemon?limit=100000&offset=0`)
		return data
	}

	async getSome({ limit, offset }: { limit: number; offset: number }) {
		if (offset < 0) {
			throw new Error('Offset has to be a positive number')
		}

		const { data } = await axios.get(`${POKEMON_API_BASE_URL}pokemon?limit=${limit}&offset=${offset}`)

		if (data.results.length === 0) {
			throw new Error(`No pokemons were found with limit ${limit} and offset ${offset}`)
		}

		return data
	}

	async getOneById({ id }: { id: number }) {
		try {
			const { data } = await axios.get(`${POKEMON_API_BASE_URL}pokemon/${id}`)

			console.log(data)
			return data
		} catch (err) {
			if (err instanceof AxiosError) throw new Error(err?.response?.data)
		}
	}

	async getOneByName({ name }: { name: string }) {
		try {
			if (name === '') {
				throw Error('Name is a required parameter')
			}

			const { data } = await axios.get(`${POKEMON_API_BASE_URL}pokemon/${name}`)

			if (!data) {
				throw Error(`There is no pokemon with name ${name}`)
			}

			return data
		} catch (err) {
			if (err instanceof AxiosError) throw new Error(err?.response?.data)
		}
	}
}
export default new PokemonService()
