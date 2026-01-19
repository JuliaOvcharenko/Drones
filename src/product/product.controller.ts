import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";
import { ProductControllerContract } from "./product.types";



export const ProductController: ProductControllerContract = {
    getAllProducts: async (req, res) => {
        const categoryName = req.query.categoryName
        try {
            const resp = await ProductService.getAllProducts(categoryName)
            res.status(200).json(resp)
        }
        catch (err) {
            console.log(err)
            res.status(500).json("Server error.")
        }
    },
    getProductById: async (req, res) => {
        const productId = +req.params.id
        if (isNaN(productId)) {
            res.status(400).json("ProductId must be a number.")
            return
        }
        const product = await ProductService.getProductById(productId)

        if (!product) {
            res.status(404).json("No product with such id.");
            return;
        }
        res.status(200).json(product)

    }, 

    getProductSuggestions: async (req, res) => {

        if (req.query.isNew !== undefined && req.query.popularity !== undefined){
            res.status(400).json("Query parameters 'isNew' and 'popularity' cannot be used together.")
            return
        }

        if (req.query.isNew !== undefined){
            if (req.query.isNew !== 'true' && req.query.isNew !== 'false') {
                res.status(400).json("Query parameter 'isNew' must be 'true' or 'false'.")
                return
            }
        }

        if (req.query.popularity !== undefined){
            if (req.query.popularity !== 'true' && req.query.popularity !== 'false'){
                res.status(400).json("Query parameter 'popularity' must be 'true' or 'false'.")
                return
            }
        }
        const products = await ProductRepository.getProductSuggestions(
            req.query.popularity === 'true', 
            req.query.isNew === 'true'
        )

        res.status(200).json(products);
    }

}