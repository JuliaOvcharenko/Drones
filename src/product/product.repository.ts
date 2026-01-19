import { client } from "../client/client";
import { Prisma } from "../generated/prisma";
import { ProductRepositoryContract } from "./product.types";


export const ProductRepository: ProductRepositoryContract = {
    getAllProducts: async (categoryName?) => {
        try {
            const products = await client.product.findMany({
                where: categoryName 
                    ? {category: {name: categoryName}} :undefined,
                include: {
                    infoBlocks: true,
                },
            }
        );


            return products;
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                switch (error.code) {
                    case "P1000":
                        console.error("Authentication failed. Invalid database credentials.");
                        break;
                    case "P1001":
                        console.error("Database server was not found or is unreachable.");
                        break;
                    case "P1002":
                        console.error("Database connection timed out.");
                        break;
                    case "P2024":
                        console.error("Timed out fetching a new connection from the connection pool.");
                        break;
                    case "P2025":
                        console.error("Record not found or unable to perform the requested operation.");
                        break;
                    default:
                        console.error(`Prisma error: ${error.code}`);
                }
            } else {
                console.error("Unknown server error:", error);
            }
            return;
        }
    },
    getProductById: async (id) => {
        try {
            const product = await client.product.findUnique({
                where: { id },
                include: {
                    infoBlocks: {
                    include: { images: false }
                    },
                    mainImage: true
                }
            })
            return product

        } catch (error) {
            console.error(error)
            return null
    }}, 

    getProductSuggestions: async (popularity, isNew, limit = 3, offset = 0) => {
        if (popularity) {
            return await client.product.findMany({
                where: {
                    orders: {
                        some: {}
                    }
                },
                orderBy: {
                    orders: {
                        _count: 'desc'
                    }
                },
                take: limit,
                skip: offset,
                include: {
                    mainImage: true
                }
            })
        }

        if (isNew) {
            return await client.product.findMany({
                orderBy: {
                    createdAt: 'desc'
                },
                take: limit,
                skip: offset,
                include: {
                    mainImage: true
                }
            })
        }

        return await client.product.findMany({
            take: limit,
            skip: offset,
            include: {
                mainImage: true
            }
        })
    }
}