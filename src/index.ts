import express, { Application } from 'express'
import PokemonRouter from './routes/pokemonRouter'

const app: Application = express()

/* ROUTES */
app.use('/api/pokemons', PokemonRouter)

/* LISTENING */
const PORT: Number = 4000
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app
