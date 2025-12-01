import { Router } from 'express';
import { ProductController } from './product.controller';
export const ProductRouter = Router();


ProductRouter.get('/', ProductController.getAllProducts)

ProductRouter.get('/:id', ProductController.getProductById)
