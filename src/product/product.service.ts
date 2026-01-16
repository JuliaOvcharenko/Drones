
import { ProductRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";


export const ProductService: ProductServiceContract = {
    getAllProducts: (categoryName) => {
        return ProductRepository.getAllProducts(categoryName);
    },

    getProductSuggestions: (isNew) => {
        return ProductRepository.getProductSuggestions(isNew)
    },

    getProductById: (id) => {
        return ProductRepository.getProductById(id);
    }
}