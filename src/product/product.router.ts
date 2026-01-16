import { Router } from 'express';
import { ProductController } from './product.controller';
export const ProductRouter = Router();


ProductRouter.get('/', ProductController.getAllProducts)
ProductRouter.get('/suggestions', ProductController.getProductSuggestions)

ProductRouter.get('/:id', ProductController.getProductById)
