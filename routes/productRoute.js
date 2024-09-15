import { Router } from 'express'
import { getProduct, putProduct, deleteProduct, postProduct } from '../controllers/productController.js'

const productRouter = Router()

productRouter.get('/', getProduct);
productRouter.post('/', postProduct);
productRouter.put('/:id', putProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter