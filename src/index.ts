import express from 'express'
import cors from 'cors'
import { attestationsRouter } from './routes/attestations.js'
import { healthRouter } from './routes/health.js'
import {
  apiVersionMiddleware,
  versionResponseMiddleware,
} from './middleware/apiVersion.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(apiVersionMiddleware)
app.use(versionResponseMiddleware)

app.use('/api/v1/health', healthRouter)
app.use('/api/v1/attestations', attestationsRouter)

app.listen(PORT, () => {
  console.log(`Veritasor API listening on http://localhost:${PORT}`)
})
