import { Router } from 'express';
import { UserController } from './user.controller';
import { authMiddleware } from '../middleware/auth-middleware';

export const UserRouter = Router();


UserRouter.get('/me',authMiddleware, UserController.me)
UserRouter.post('/login', UserController.login)
UserRouter.post('/register', UserController.register)
UserRouter.patch('/:userId', UserController.updateUser)

UserRouter.post('/address', UserController.createAddress)
UserRouter.patch('/address/:addressId', UserController.updateAddress)
UserRouter.delete('/address/:addressId', UserController.deleteAddress)
UserRouter.get('/addresses', UserController.getAllAddresses)

