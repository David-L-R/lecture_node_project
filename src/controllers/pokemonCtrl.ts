import { Request, Response } from 'express'
import PokemonService from '../services/pokemonService'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/
export class PokemonCtrl {
	async getAll(req: Request, res: Response) {
		try {
			const { results } = await PokemonService.getAll()
			res.status(200).send(results)
		} catch (err) {
			res.status(500).send(err)
		}
	}
}

export default new PokemonCtrl()
