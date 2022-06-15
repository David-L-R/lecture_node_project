import { Router } from 'express'
import pokemonCtrl from '../controllers/pokemonCtrl'
import PokemonCtrl from '../controllers/pokemonCtrl'

const router = Router()

export default router
	.get('/', PokemonCtrl.getAll)
	.get('/filter', PokemonCtrl.getSome)
	.get('/id/:id', pokemonCtrl.getOneById)
	.get('/name/:name', pokemonCtrl.getOneByName)
