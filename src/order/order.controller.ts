import { OrderRepository } from "./order.repository";
import { OrderService } from "./order.service";
import { OrderControllerContract } from "./order.types";



export const OrderController: OrderControllerContract = {
    getAllOrders: async (req, res) => {
        try {
            const resp = await OrderService.getAllOrders()
            res.status(200).json(resp)
        }
        catch (err) {
            console.log(err)
            res.status(500).json("Server error.")
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