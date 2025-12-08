import { Request, Response } from 'express'
import { Prisma } from '../generated/prisma'



export type Category = Prisma.CategoryGetPayload<{}>

export interface CategoryControllerContract {
    
    getAllCategories: (req: Request<void, Category[] | string, void, void>,  
        res: Response<Category[] | string>) => void
}

export interface CategoryServiceContract {
    getAllCategories: () => Promise<Category[] | undefined>
}

export interface CategoryRepositoryContract {
    getAllCategories: () => Promise<Category[] | undefined>
}


