import express, { Application } from 'express'

import pokemonRouter from './routes/pokemon'

const app: Application = express()
app.use(express.json())

/* ROUTES */
app.use('/api/pokemon', pokemonRouter)

/* LISTENING */
const PORT: Number = 4000
app.listen(PORT, (): void => console.info(`running on port ${PORT}`))

export default app
