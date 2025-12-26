import { Router } from 'express';
import { OrderController } from './order.controller';
export const OrderRouter = Router();


OrderRouter.get('/', OrderController.getAllOrders)

OrderRouter.delete('/:id', OrderController.deleteOrder)
