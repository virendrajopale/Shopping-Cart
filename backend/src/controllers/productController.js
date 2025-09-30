import { products } from '../data/products.js'

export const getProducts = (req, res) => {
  res.json({ products })
}

export const checkout = (req, res) => {
  const { items } = req.body || {}
  console.log('Received order items:', items)
  res.json({ success: true, message: 'Order received', items })
} 