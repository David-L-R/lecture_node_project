import { Request, Response } from 'express'
import PokemonService from '../services/pokemon'

import { Pokemon, PokemonPreview } from '../types/pokemon'
/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/
export class PokemonCtrl {
	async getAll(req: Request, res: Response) {
		try {
			const pokemons: void | PokemonPreview[] = await PokemonService.getAll()
			res.status(200).send(pokemons)
		} catch (err) {
			console.error(err)
			res.status(500).send(err)
		}
	}
	// async getMany(req: Request, res: Response) {
	// 	const { limit, offset } = req.query // ?limit=5&offset=100

	// 	// return await getMany(limit: number, offset: number)
	// }
	async getOneById(req: Request, res: Response) {
		try {
			const { id } = req.params
			const pokemon: void | Pokemon | undefined = await PokemonService.getOneById(parseInt(id))

			if (!pokemon) {
				return res.status(400).send('No pokemon was found')
			}
			res.status(200).send(pokemon)
		} catch (err) {
			console.error(err)
			res.status(500).send(err)
		}
	}
	// getOneByName(name: string) {}
}

export default new PokemonCtrl()
