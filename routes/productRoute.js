import { Router } from 'express'
import { getProduct, putProduct, deleteProduct } from '../controllers/productController.js'

const productRouter = Router()

productRouter.get('/', getProduct)
productRouter.put('/', putProduct)
productRouter.delete('/', deleteProduct)

export default productRouter