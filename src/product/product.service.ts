
import { ProductRepository } from "./product.repository";
import { Product, ProductServiceContract } from "./product.types";


export const ProductService: ProductServiceContract = {
    getAllProducts: async (categoryName, page, limit) => {
        return await ProductRepository.getAllProducts(categoryName, page, limit);
    },

    getProductById: async (id) => {
        return await ProductRepository.getProductById(id);
    },

    getProductSuggestions: async (popularity, isNew, sameAs, limit=4, priceDelta=100) => {

        if (sameAs !== undefined) {
            const baseProduct = await ProductRepository.getProductById(sameAs)

            if (!baseProduct) {
                return []
            }

            const products = await ProductRepository.getAllProducts(undefined, 1, undefined);

            const result: Product[] = []

            if (result.length < limit) {
                const baseWords = baseProduct.name.toLowerCase().split(" ")

                const similarByName = products?.filter(product =>
                    baseWords.some(word =>
                        product.name.toLowerCase().includes(word)
                    )
                ) ?? []

                result.push(...similarByName.slice(0, limit - result.length))
            }

            if (result.length < limit) {
                const sameCategory = products?.filter(product => {
                    return product.categoryId === baseProduct.categoryId
                }) ?? []

                result.push(...sameCategory.slice(0, limit - result.length))
            }

            if (result.length < limit) {
                const remaining = limit - result.length;
                const byPrice = products?.filter(p =>
                    p.price >= baseProduct.price - priceDelta &&
                    p.price <= baseProduct.price + priceDelta &&
                    !result.includes(p) &&
                    p.id !== baseProduct.id
                ) ?? []
                result.push(...byPrice.slice(0, remaining));
            }

            return result
        }

        if (popularity) {
            return await ProductRepository.getProductSuggestions(true, false)
        }

        if (isNew) {
            return await ProductRepository.getProductSuggestions(false, true)
        }

        return await ProductRepository.getProductSuggestions(false, false)
    }

}


// {
//     "id": 12,
//     "name": "Test Drone Model #9",
//     "price": 190,
//     "discount": 0,
//     "description": "This is a generated test drone number 9 for pagination testing.",
//     "countOfProduct": 100,
//     "categoryId": 1,
//     "createdAt": "2026-01-28T11:45:00.972Z",
//     "infoBlocks": [],
//     "mainImage": {
//         "id": 12,
//         "image": "http://localhost:8000/uploads/drone1.png",
//         "productId": 12
//     }
// }