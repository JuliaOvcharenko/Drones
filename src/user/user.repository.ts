import { client } from "../client/client";
import { Prisma } from "../generated/prisma";
import { UserRepositoryContract } from "./user.types";


export const UserRepository: UserRepositoryContract = {
    findUserByEmail: async(email) =>{
        try {
            const findUser = await client.user.findUnique({
                where:{
                    email
                }
            })
            return findUser
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
    createUser: async(dataFromUser)=>{
        try {
            const createUser = await client.user.create({data:dataFromUser})
            return createUser
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

    // addressCreate: async(addressData){

    // },
    getUserWithoutPasswordById: async(id)=>{
        try {
            const findUser = await client.user.findUnique({
                where:{
                    id
                },
                omit:{
                    password: true
                }
            })
            return findUser
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

    createAddress: async(addressData)=>{
        try{
            const createdAddress = client.address.create({
            data: addressData
        });
            return createdAddress
        } catch(error){
            throw error
        }
    },

    deleteAddress: async(adressId) => {
        try{
            const deletedAddress = await client.address.delete({
                where: {
                    id: adressId
                }
            })
            return deletedAddress
        } catch(error){
            throw error
        }
    },

    findAddressByid: async(id) => {
        try{
            const findedAddress = client.address.findUnique({
                where: {id}
            })
            return findedAddress
        } catch(error){
            throw error
        }
    },

    updateAddress: async (addressId, updateData) => {
        try{
            const updatedAddress = await client.address.update({
                where: {
                    id: addressId
                },
                data: updateData
            })
            return updatedAddress
        } catch(error){
            throw error
        }
    },

    getAllAddresses: async() => {
        try{
            const AllAddresses = await client.address.findMany()
            return AllAddresses
        }
        catch(error){
            throw error
        }
    }, 

    updateUser: async (data, userId) => {
        try {
            const updatedUser = await client.user.update({
                where: {
                    id: userId,
                },
                data: data  
            });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

}