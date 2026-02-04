import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";
import { ProductControllerContract } from "./product.types";



export const ProductController: ProductControllerContract = {
    getAllProducts: async (req, res) => {
        const { categoryName, page, limit } = req.query;
        const pageNumber = page ? parseInt(page) : 1;

        const limitNumber = limit ? parseInt(limit) : 16;
        try {
            const resp = await ProductService.getAllProducts(categoryName, pageNumber, limitNumber)
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

        let sameAs: number | undefined
        let limit = 4
        let isNew = false
        let popularity = false

        if (req.query.sameAs !== undefined) {
            sameAs = +req.query.sameAs
        }

        if (req.query.limit !== undefined) {
            limit = Number(req.query.limit)
        }
    
        if (req.query.isNew === 'true') {
            isNew = true
        } 
        
        else if (req.query.isNew === 'false') {
            isNew = false
        } 
        
        else if (req.query.isNew !== undefined) {
            res.status(400).json("Query parameter 'isNew' must be 'true' or 'false'. Please, enter one of them.")
            return
        }

        if (req.query.popularity === 'true') {
            popularity = true
        } 

        else if (req.query.popularity === 'false') {
            popularity = false
        } 
        
        else if (req.query.popularity !== undefined) {
            res.status(400).json("Query parameter 'popularity' must be 'true' or 'false'. Please, enter one of them.")
            return
        }

        if (req.query.isNew !== undefined && req.query.popularity !== undefined) {
            res.status(400).json("Query parameters 'isNew' and 'popularity' cannot be used together. Please, enter one of them.")
            return
        }

        const products = await ProductService.getProductSuggestions(popularity, isNew, sameAs, limit)
        res.status(200).json(products)

    }
}