import { Router } from 'express';
import { AddressController } from './address.controller';

export const AddressRouter = Router();


AddressRouter.post('/create', AddressController.createAddress)