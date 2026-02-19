import { Router } from 'express';
import { OrderController } from './order.controller';
import { authMiddleware } from '../middleware/auth-middleware';
export const OrderRouter = Router();


OrderRouter.get('/', OrderController.getAllOrders)

OrderRouter.delete('/:id', OrderController.deleteOrder)

OrderRouter.post('/', authMiddleware, OrderController.createOrder);

OrderRouter.get('/my', authMiddleware, OrderController.getUserOrders);
