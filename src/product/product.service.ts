
import { ProductRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";


export const ProductService: ProductServiceContract = {
    getAllProducts: (categoryName) => {
        return ProductRepository.getAllProducts(categoryName);
    },

    getProductSuggestions: (popularity, isNew) => {
        return ProductRepository.getProductSuggestions(popularity, isNew)
    },

    getProductById: (id) => {
        return ProductRepository.getProductById(id);
    }
}