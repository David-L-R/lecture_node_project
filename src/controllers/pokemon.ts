import { Request, Response } from 'express'
import PokemonService from '../services/pokemon'
import { PokemonPreview } from '../types/pokemon'

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
	// getOneById(id: number) {}
	// getOneByName(name: string) {}
}

export default new PokemonCtrl()
