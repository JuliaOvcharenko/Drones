import { Request, Response } from 'express'
import { Prisma } from "../generated/prisma/client";


export type Product = Prisma.ProductGetPayload<{}>

export interface ProductControllerContract {
    // getAllProducts:
    // 1. нету динам. параметров
    // 2. Возвращает список продуктов или string(сообщение про ошибку)
    // 3. Нету body
    // 4. Есть query параметр categoryName
    
    getAllProducts: (req: Request<void, Product[] | string, void, {categoryName?: string | undefined}>,  
        res: Response<Product[] | string>) => void
    
    // getProductById:
    // 1. есть динам. параметр id
    // 2. Возвращает продукт или string(сообщение про ошибку)
    // 3. Нету body
    // 4. Нету query
    
    getProductById: (req: Request<{id: string}, Product | string, void, void>, 
        res: Response<Product | string>) => void
}

export interface ProductServiceContract {
    getAllProducts: (categoryName?: string | undefined) => Promise<Product[]>
    getProductById: (id: number) => Promise<Product | null>
}

export interface ProductRepositoryContract {
    getAllProducts: (categoryName?: string | undefined) => Promise<Product[]>
    getProductById: (id: number) => Promise<Product | null>
}


