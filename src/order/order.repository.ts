import { client } from "../client/client";
import { Prisma } from "../generated/prisma";
import { OrderRepositoryContract } from "./order.types";

export const OrderRepository: OrderRepositoryContract = {
    getAllOrders: async () => {
        try {
           const orders = await client.order.findMany({
            select: {
                id: true,
                username: true,
                lastname: true,
                patronymic: true,
                totalDiscount: true,
                payment: true,
                trackingNumber: true,
                totalPrice: true,
                countOfProducts: true,
                orderDate: true,

            user: {
                select: {
                    id: true,
                    username: true,
                    email: true,
                    lastname: true,
                    patronymic: true,
                    birthDate: true,
                    phoneNumber: true,
                },
            },

            products: {
                select: {
                    count_of_product: true,
                    price: true,
                    discount: true,
                    Product: {
                    select: {
                        category: true,
                    },
                },
            },
            },
        },
    })
            return orders;
        } catch (error) {
            console.log(error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                console.log('Prisma client known request error occurred');
                throw new Error("Failed to fetch orders from database");
            }
            throw error;
        }
    },

    findOrderById: async (id) => {
        try {
            const findOrder = await client.order.findUnique({
                where:{id},
            })
            return findOrder
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                switch (error.code) {
                    case "P1000":
                        console.error("Authentication failed. Invalid database credentials.")
                        break
                    case "P1001":
                        console.error("Database server was not found or is unreachable.")
                        break
                    case "P1002":
                        console.error("Database connection timed out.")
                        break
                    case "P2024":
                        console.error("Timed out fetching a new connection from the connection pool.")
                        break
                    case "P2025":
                        console.error("Record not found or unable to perform the requested operation.")
                        break
                    default:
                        console.error(`Prisma error: ${error.code}`)
                }
            }
            else {
                console.error("Unknown server error:", error)
            }
            return null
        }
    }, 

    deleteOrder: async (orderId: number) => {
        try {
            await client.orderProducts.deleteMany({
                where: { OrderId: orderId },
            })

            const deletedOrder = await client.order.delete({
            where: { id: orderId },
            })

            return deletedOrder

        } catch (error) {
            throw error
        }
    }
}