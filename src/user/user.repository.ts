import { client } from "../client/client";
import { Prisma } from "../generated/prisma";
import { UserRepositoryContract } from "./user.types";


export const UserRepository: UserRepositoryContract = {
    findUserByEmail: async(email) =>{

    },
    createUser: async(dataFromUser)=>{

    },

    addressCreate: async(addressData){

    },
    getUserWithoutPasswordById: async(id)=>{
        
    }
}