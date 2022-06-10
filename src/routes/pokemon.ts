import { Router, Request, Response } from 'express'
import PokemonCtrl from '../controllers/pokemon'

const router = Router()

router.get('/', PokemonCtrl.getAll)

export default router
