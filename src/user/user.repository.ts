import { client } from "../client/client";
import { Prisma } from "../generated/prisma";
import { UserRepositoryContract } from "./user.types";


export const UserRepository: UserRepositoryContract = {
    findUserByEmail: async(email) =>{

    },
    createUser: async(dataFromUser)=>{

    },
    getUserWithoutPasswordById: async(id)=>{
        
    }
}