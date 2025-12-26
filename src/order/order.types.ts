import { Request, Response } from 'express'
import { Prisma } from '../generated/prisma'


export type Order = Prisma.OrderGetPayload<{}>
export type CreateOrder = Prisma.OrderUncheckedCreateInput
export type OrderWithoutRelation = Prisma.OrderGetPayload<{omit: {userId: true, addressId: true}}>;

export interface OrderControllerContract {
    getAllOrders: (
        req: Request<void, OrderWithoutRelation[] | string, void, object>,  
        res: Response<OrderWithoutRelation[] | string>) => void
    deleteOrder: (
        req: Request<{id: number}, Order | string, object >,
        res: Response<Order | string>
    ) => void;
    
}

export interface OrderServiceContract {
    getAllOrders: () => Promise<OrderWithoutRelation[] | undefined>
    deleteOrder: (id: number) => Promise<Order | string>
}

export interface OrderRepositoryContract {
    getAllOrders: () => Promise<OrderWithoutRelation[] | undefined>
    findOrderById: (id: number) => Promise<Order | null>
    deleteOrder: (id: number) => Promise<Order | string>
}


