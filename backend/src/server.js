import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api', productRoutes)

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
}) 