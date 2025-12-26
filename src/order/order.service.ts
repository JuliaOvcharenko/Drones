
import { OrderRepository } from "./order.repository";
import { OrderServiceContract } from "./order.types";


export const OrderService: OrderServiceContract = {
    getAllOrders: async() => {
        return OrderRepository.getAllOrders();
    },

    deleteOrder: async(id) => {
        return OrderRepository.deleteOrder(id);
    },
}