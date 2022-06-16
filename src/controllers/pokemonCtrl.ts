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

	async getSome(req: Request, res: Response) {
		const { limit, offset } = req.query

		const offsetNum = Number(offset)
		const limitNum = Number(limit)

		try {
			const { results } = await PokemonService.getSome({
				limit: isNaN(limitNum) ? 0 : limitNum,
				offset: isNaN(offsetNum) ? 0 : offsetNum,
			})

			res.status(200).send(results)
		} catch (err) {
			if (err instanceof Error) {
				if (
					err.message.includes(`No pokemons were found with limit`) ||
					err.message === 'Offset has to be a positive number'
				) {
					return res.status(400).send(err.message)
				}
			}
			return res.send(err)
		}
	}

	async getOneById(req: Request, res: Response) {
		const { id } = req.params

		try {
			const pokemon = await PokemonService.getOneById({
				id: parseInt(id),
			})
			res.status(200).send(pokemon)
		} catch (err) {
			if (err instanceof Error) {
				console.log(err)
				if (err.message === 'Not Found') {
					return res.status(400).send(err.message)
				}
			}
			res.send(err)
		}
	}

	async getOneByName(req: Request, res: Response) {
		const { name } = req.params

		try {
			const pokemon = await PokemonService.getOneByName({
				name,
			})
			res.status(200).send(pokemon)
		} catch (err) {
			if (err instanceof Error) {
				if (err.message === 'Not Found') {
					return res.status(400).send(err.message)
				}
			}
			res.send(err)
		}
	}
}

export default new PokemonCtrl()
