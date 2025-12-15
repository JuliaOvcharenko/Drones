import { Prisma } from "../generated/prisma"
import { Request, Response } from "express";


export type Address = Prisma.AddressGetPayload<{}>;

export interface ErrorResponse{
    message?: string
}

export type AddressCreate = Prisma.AddressUncheckedCreateInput

export interface AddressControllerContract {
    createAddress: (req: Request<void, Address | ErrorResponse, AddressCreate, void>, 
        res: Response<Address | ErrorResponse>) => void
}

export interface AddressServiceContract {
    createAddress:(data:AddressCreate) => Promise<Address | ErrorResponse>
}

export interface AddressRepositoryContract {
    createAddress(data: AddressCreate): Promise<Address | ErrorResponse>
}

