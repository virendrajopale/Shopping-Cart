import { Router } from 'express'
import { checkout, getProducts } from '../controllers/productController.js'

const router = Router()

router.get('/products', getProducts)
router.post('/checkout', checkout)

export default router 