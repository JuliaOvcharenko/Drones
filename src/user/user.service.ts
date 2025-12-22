
import { compare, hash } from "bcrypt";
import { UserRepository } from "./user.repository";
import { ServiceResponse, UserCreate, UserServiceContract } from "./user.types";
import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";


export const UserService: UserServiceContract = {
    login: async (body) => {
        const user = await UserRepository.findUserByEmail(body.email)
        if (!user) {
            const respon: ServiceResponse = {
                status: "error",
                message: "user not found",
                code: 404
            }
            return respon
        }
        const isTruePassword = await compare(body.password, user.password);
        if (!isTruePassword) {
            const respon: ServiceResponse = {
                status: "error",
                message: "Bad Request",
                code: 400
            }
            return respon
        }
        const tocken = sign({ id: user.id }, ENV.SECRET_KEY, {
            expiresIn: "7d"
        })
        const respon: ServiceResponse = {
            status: "success",
            message: "success",
            code: 200,
            dataAuth: { tocken: tocken }
        }
        return respon
    },
    register: async (body) => {
        let allEllBody = { ...body }
        const user = await UserRepository.findUserByEmail(body.email)
        if (user) {
            const respon: ServiceResponse = {
                status: "error",
                message: "Conflict",
                code: 409
            }
            return respon
        }
        if (!allEllBody.email || !allEllBody.name || !allEllBody.password || !allEllBody.passwordConfirm || (allEllBody.password !== allEllBody.passwordConfirm)) {
            const respon: ServiceResponse = {
                status: "error",
                message: "Bad Request",
                code: 401
            }
            return respon
        }
        const hashedPassword = await hash(body.password, 10);
        const dataWithHashedPassword = {
            ...body,
            password: hashedPassword
        }
        const dataCreateUser: UserCreate = {
            username: dataWithHashedPassword.name,
            lastname: "",
            patronymic: "",
            email: dataWithHashedPassword.email,
            birthDate: new Date(),
            phoneNumber: "",
            password: dataWithHashedPassword.password,
            addressId: null
        }
        const createUser = await UserRepository.createUser(dataCreateUser);
        if (typeof createUser === "string" ) {
            const respon: ServiceResponse = {
                status: "error",
                message: createUser,
                code: 500
            }
            return respon
        }
        if (!createUser) {
            const respon: ServiceResponse = {
                status: "error",
                message: "Internal Server Error",
                code: 500
            }
            return respon
        }
        const tocken = sign({ id: createUser.id }, ENV.SECRET_KEY, {
            expiresIn: "7d"
        })
        const respon: ServiceResponse = {
            status: "success",
            code: 201,
            message: "Created",
            dataAuth: { tocken: tocken }
        }
        return respon

    },
    me: async (id) => {
        const userMe = await UserRepository.getUserWithoutPasswordById(id)
        if (!userMe) {
            const respon: ServiceResponse = {
                status: "error",
                message: "user not found",
                code: 404
            }
            return respon
        }
        const respon: ServiceResponse = {
            status: "success",
            dataUser: userMe,
            message: "success",
            code: 200
        }
        return respon
    }, 
    createAddress: async(addressData) => {
        return UserRepository.createAddress(addressData);
    },  
    updateAddress: async(id, updateAddressData) => {
        return UserRepository.updateAddress(id, updateAddressData);
    },
    deleteAddress: async(id) => {
        return UserRepository.deleteAddress(id);
    },
    getAllAddresses: async() => {
        return UserRepository.getAllAddresses();
    },
    updateUser: async (data, userId) => {
        return UserRepository.updateUser(data, userId);
    }
}
