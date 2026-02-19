import { Request, Response } from 'express'
import { Prisma } from '../generated/prisma'

export type Order = Prisma.OrderGetPayload<{}>
export type CreateOrder = Prisma.OrderUncheckedCreateInput
export type OrderWithoutRelation = Prisma.OrderGetPayload<{omit: {userId: true, addressId: true}}>

export interface OrderControllerContract {
    getAllOrders: (
        req: Request<any, OrderWithoutRelation[] | string, any, any>,  
        res: Response<OrderWithoutRelation[] | string>
    ) => Promise<void> | void
    
    getUserOrders: (
        req: Request<any, any, any, any>,  
        res: Response<any>
    ) => Promise<void> | void

    createOrder: (
        req: Request<any, Order | string, any, any>,  
        res: Response<Order | string>
    ) => Promise<void> | void
    
    deleteOrder: (
        req: Request<{id: string}, Order | string, any, any>,
        res: Response<Order | string>
    ) => Promise<void> | void
}

export interface OrderServiceContract {
    getAllOrders: () => Promise<OrderWithoutRelation[] | undefined>
    getUserOrders: (userId: number) => Promise<any>
    deleteOrder: (id: number) => Promise<Order | string>
    createOrder: (data: any, userId: number) => Promise<Order | string>
}

export interface OrderRepositoryContract {
    getAllOrders: () => Promise<OrderWithoutRelation[] | undefined>
    getUserOrders: (userId: number) => Promise<any>
    findOrderById: (id: number) => Promise<Order | null>
    createOrder: (data: any, userId: number) => Promise<Order>
    deleteOrder: (id: number) => Promise<Order | string>
}