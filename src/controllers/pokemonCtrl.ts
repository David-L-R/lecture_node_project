import { Request, Response } from 'express'
import PokemonService from '../services/pokemonService'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/
export class PokemonCtrl {
	async getAll(req: Request, res: Response) {
		const { results } = await PokemonService.getAll()
		res.status(200).send(results)
	}
}

export default new PokemonCtrl()
