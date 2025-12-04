import { ProductControllerContract } from "./product.types";



export const ProductController: ProductControllerContract = {
    getAllProducts: async (req, res) => {
        const categoryName = req.query.categoryName;
        const resp  = await ProductService.getAllPosts(categoryName)
        if(resp.status =="error"){
            res.status(400).json(resp.message)
            return
        }
        res.status(200).json(resp.dataPosts)
},
    getProductById: async(req, res) => {

    }

}