
import { ProductRepository } from "./product.repository";
import { ProductServiceContract } from "./product.types";


export const ProductService: ProductServiceContract = {
    getAllProducts: (categoryName?: string, page?: number, limit?: number) => {
        return ProductRepository.getAllProducts(categoryName, page, limit);
    },

    getProductSuggestions: (popularity, isNew) => {
        return ProductRepository.getProductSuggestions(popularity, isNew)
    },

    getProductById: (id) => {
        return ProductRepository.getProductById(id);
    }
}