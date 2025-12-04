import { Prisma } from "../generated/prisma/client";
import { ProductRepositoryContract } from "./product.types";


export const ProductRepository: ProductRepositoryContract = {
    getAllProducts: async (categoryName?) => {
        try {
            const products = await client.product.findMany({
                where: categoryName ? { category: { is: { name: categoryName } } } : undefined, 
            })
            return products
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                switch (error.code) {
                    case "P1000":
                        console.error("Authentication failed. Invalid database credentials.")
                        break
                    case "P1001":
                        console.error("Database server was not found or is unreachable.")
                        break
                    case "P1002":
                        console.error("Database connection timed out.")
                        break
                    case "P2024":
                        console.error("Timed out fetching a new connection from the connection pool.")
                        break
                    case "P2025":
                        console.error("Record not found or unable to perform the requested operation.")
                        break
                    default:
                        console.error(`Prisma error: ${error.code}`)
                }
            }
            else {
                console.error("Unknown server error:", error)
            }
            return null
        }
    },

    getProductById: async (id) => {
        try {

        }
        catch {

        }
    }
}