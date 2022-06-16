import express, { Application } from 'express'
<<<<<<< HEAD

import pokemonRouter from './routes/pokemon'
=======
import PokemonRouter from './routes/pokemonRouter'
>>>>>>> be9edb632af34d97e3073f3da919a9ec425919c8

const app: Application = express()
app.use(express.json())

/* ROUTES */
<<<<<<< HEAD
app.use('/api/pokemon', pokemonRouter)
=======
app.use('/api/pokemons', PokemonRouter)
>>>>>>> be9edb632af34d97e3073f3da919a9ec425919c8

/* LISTENING */
const PORT: Number = 4000
app.listen(PORT, (): void => console.info(`running on port ${PORT}`))

export default app
