import { ProductService } from "./product.service";
import { ProductControllerContract } from "./product.types";



export const ProductController: ProductControllerContract = {
    getAllProducts: async (req, res) => {
        const categoryName = req.query.categoryName;
        try {
            const resp = await ProductService.getAllProducts(categoryName)
            res.status(200).json(resp)
        }
        catch (err) {
            console.log(err)
            res.status(500).json("server error")
        }
    },
    getProductById: async (req, res) => {
        const productId = +req.params.id;
        if (isNaN(productId)) {
            res.status(400).json("ProductId must be a number");
            return;
        }
        const product = await ProductService.getProductById(productId);

        if (!product) {
            res.status(404).json("No product with such id");
            return;
        }
        res.status(200).json(product);

    }

}