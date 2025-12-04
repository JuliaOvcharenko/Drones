
import { ProductRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";


export const ProductService: ProductServiceContract = {
    getAllProducts: (categoryName) => {
        return ProductRepository.getAllProducts(categoryName);
    },

    getProductById: (id) => {
        return ProductRepository.getProductById(id);
    }
}