
import { client } from "../client/client";
import { OrderRepository } from "./order.repository";
import { OrderServiceContract } from "./order.types";


export const OrderService: OrderServiceContract = {
    getAllOrders: async () => {
        return OrderRepository.getAllOrders();
    },
    getUserOrders: async (userId: number) => {
        return await OrderRepository.getUserOrders(userId);
    },

    deleteOrder: async (id) => {
        return OrderRepository.deleteOrder(id);
    },
    createOrder: async (payload: any, userId: number) => {

        if (payload.phone) {
            await client.user.update({
                where: { id: userId },
                data: { phoneNumber: payload.phone }
            });
        }

        const newOrder = await OrderRepository.createOrder(payload, userId);
        return newOrder;
    }
}