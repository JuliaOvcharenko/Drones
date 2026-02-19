import { OrderRepository } from "./order.repository";
import { OrderService } from "./order.service";
import { OrderControllerContract } from "./order.types";

export const OrderController: OrderControllerContract = {
    getAllOrders: async (_req, res) => {
        try {
            const resp = await OrderService.getAllOrders();
            res.status(200).json(resp);
        }
        catch (err) {
            console.log(err);
            res.status(500).json("Server error.");
        }
    },

    createOrder: async (req, res) => {
        try {
            const userId = res.locals.userId; 
            
            if (!userId) {
                res.status(401).json("Не авторизовано. Потрібен токен.");
                return;
            }

            const orderData = req.body;
            const newOrder = await OrderService.createOrder(orderData, userId);
            
            res.status(201).json(newOrder);
        } catch (error: any) {
            console.error(error);
            res.status(500).json(error.message || "Помилка сервера при створенні замовлення.");
        }
    },
    getUserOrders: async (_req, res) => {
        try {
            const userId = res.locals.userId;
            
            if (!userId) {
                res.status(401).json("Не авторизовано");
                return;
            }
            
            const orders = await OrderService.getUserOrders(userId);
            res.status(200).json(orders);
        } catch (err) {
            console.log(err);
            res.status(500).json("Server error.");
        }
    },

    deleteOrder: async (req, res) => {
        const orderId = +req.params.id;
        
        if (isNaN(orderId)) {
            res.status(400).json("Id must be a number");
            return;
        }
        
        const findedOrder = await OrderRepository.findOrderById(orderId);
        if (!findedOrder) {
            res.status(404).json("No order with such id");
            return;
        }

        const deletedOrder = await OrderService.deleteOrder(orderId);
        if (!deletedOrder) {
            res.status(500).json("Delete failed");
            return;
        }
        res.status(200).json("Order deleted successfully");
    }
}