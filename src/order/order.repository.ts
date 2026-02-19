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
            });
            return orders as any;
        } catch (error) {
            console.log(error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                console.log('Prisma client known request error occurred');
                throw new Error("Failed to fetch orders from database");
            }
            throw error;
        }
    },
    getUserOrders: async (userId: number) => {
        return await client.order.findMany({
            where: { userId: userId },
            orderBy: { orderDate: 'desc' },
            select: {
                id: true,
                status: true,
                trackingNumber: true,
                totalPrice: true,
                totalDiscount: true,
                orderDate: true,
                payment: true,
                address: true,
                username: true,
                lastname: true,
                patronymic: true,
                user: {
                    select: {
                        phoneNumber: true
                    }
                },
                products: {
                    select: {
                        count_of_product: true,
                        price: true,
                        Product: {
                            select: { name: true, mainImage: true }
                        }
                    }
                }
            }
        })
    },

    createOrder: async (data: any, userId: number) => {
        return await client.order.create({
            data: {
                username: data.username,
                lastname: data.lastname,
                patronymic: data.patronymic,
                totalDiscount: data.totalDiscount,
                payment: data.payment,
                trackingNumber: Math.floor(Math.random() * 100000000),
                totalPrice: data.totalPrice,
                countOfProducts: data.countOfProducts,
                orderDate: new Date(),

                user: {
                    connect: { id: userId }
                },

                address: {
                    create: {
                        city: data.delivery.city,
                        street: data.delivery.street,
                        house: data.delivery.house,
                        flat: data.delivery.flat,
                        entrance: "-"
                    }
                },

                products: {
                    create: data.products.map((product: any) => ({
                        count_of_product: product.count_of_product,
                        price: product.price,
                        discount: product.discount,
                        Product: {
                            connect: { id: product.productId }
                        }
                    }))
                }
            }
        });
    },

    findOrderById: async (id: number) => {
        try {
            const findOrder = await client.order.findUnique({
                where: { id },
            });
            return findOrder;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                switch (error.code) {
                    case "P1000":
                        console.error("Authentication failed. Invalid database credentials.");
                        break;
                    case "P1001":
                        console.error("Database server was not found or is unreachable.");
                        break;
                    case "P1002":
                        console.error("Database connection timed out.");
                        break;
                    case "P2024":
                        console.error("Timed out fetching a new connection from the connection pool.");
                        break;
                    case "P2025":
                        console.error("Record not found or unable to perform the requested operation.");
                        break;
                    default:
                        console.error(`Prisma error: ${error.code}`);
                }
            } else {
                console.error("Unknown server error:", error);
            }
            return null;
        }
    },

    deleteOrder: async (orderId: number) => {
        try {
            // Отримуємо замовлення, щоб дізнатися ID адреси перед видаленням
            const orderToFind = await client.order.findUnique({
                where: { id: orderId }
            });

            // Видаляємо всі зв'язки з продуктами
            await client.orderProducts.deleteMany({
                where: { OrderId: orderId },
            });

            // Видаляємо саме замовлення
            const deletedOrder = await client.order.delete({
                where: { id: orderId },
            });

            // Очищаємо адресу 
            if (orderToFind?.addressId) {
                await client.address.delete({
                    where: { id: orderToFind.addressId }
                });
            }

            return deletedOrder;

        } catch (error) {
            throw error;
        }
    }
};