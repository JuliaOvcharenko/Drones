import { Router } from 'express';
import { CategoryController } from './category.controller';
export const CategoryRouter = Router();


CategoryRouter.get('/', CategoryController.getAllCategories)

