import { Request, Response } from 'express'
import { Prisma } from '../generated/prisma'



export type Product = Prisma.ProductGetPayload<{ include: { mainImage: true } }>

export interface ProductControllerContract {
    // getAllProducts:
    // 1. нету динам. параметров
    // 2. Возвращает список продуктов или string(сообщение про ошибку)
    // 3. Нету body
    // 4. Есть query параметр categoryName

    getAllProducts: (req: Request<void, Product[] | string, void, {
        categoryName?: string;
        page?: string;
        limit?: string;
    }>,
        res: Response<Product[] | string>) => void

    // getProductById:
    // 1. есть динам. параметр id
    // 2. Возвращает продукт или string(сообщение про ошибку)
    // 3. Нету body
    // 4. Нету query

    getProductById: (req: Request<{ id: string }, Product | string, void, void>,
        res: Response<Product | string>) => void

    getProductSuggestions: (req: Request<void, Product[] | string, void, { isNew?: string | undefined, popularity?: string | undefined, sameAs?: string | undefined, limit?: number}>,
        res: Response<Product[] | string>) => void
}

export interface ProductServiceContract {
    getAllProducts: (categoryName?: string, page?: number, limit?: number) => Promise<Product[] | undefined>
    getProductById: (id: number) => Promise<Product | null>
    getProductSuggestions: (popularity?: boolean | undefined, isNew?: boolean | undefined, sameAs?: number | undefined, limit?: number, priceDelta?: number) => Promise<Product[]>
}

export interface ProductRepositoryContract {
    getAllProducts: (categoryName?: string, page?: number, limit?: number) => Promise<Product[] | undefined>
    getProductById: (id: number) => Promise<Product | null>
    getProductSuggestions: (popularity?: boolean, isNew?: boolean) => Promise<Product[]>
}

