import { Router } from 'express'
import { getCategory, postCategory } from '../controllers/categoryController.js'

const categoryRouter = Router()

categoryRouter.get('/', getCategory)
categoryRouter.post('/', postCategory)

export default categoryRouter