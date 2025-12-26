
import { compare, hash } from "bcrypt";
import { UserRepository } from "./user.repository";
import { ServiceResponse, UserCreate, UserServiceContract } from "./user.types";
import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";
import { MailService } from "./mailService";


export const UserService: UserServiceContract = {
    login: async (body) => {
        try {
            const user = await UserRepository.findUserByEmail(body.email);

            if (!user) {
                return {
                    status: "error",
                    message: "User not found",
                    code: 404
                };
            }

            if (!user.password || !user.password.startsWith("$2")) {
                return {
                    status: "error",
                    message: "Invalid user password data",
                    code: 500
                };
            }

            const isTruePassword = await compare(body.password, user.password);

            if (!isTruePassword) {
                return {
                    status: "error",
                    message: "Invalid email or password",
                    code: 400
                };
            }
            const token = sign({ id: user.id }, ENV.SECRET_KEY, {
                expiresIn: "7d"
            });

            return {
                status: "success",
                message: "Login successful",
                code: 200,
                dataAuth: { token }
            };

        } catch (error) {
            console.error("Login error:", error);
            return {
                status: "error",
                message: "Internal Server Error",
                code: 500
            };
        }
    },
    register: async (body) => {
        const allEllBody = { ...body }
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
                message: "Bad Request. Check your data",
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
        const token = sign({ id: createUser.id }, ENV.SECRET_KEY, {
            expiresIn: "7d"
        })
        const respon: ServiceResponse = {
            status: "success",
            code: 201,
            message: "Created",
            dataAuth: { token: token }
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

    verifyRecoveryCode: async(email, code) => {
        return UserRepository.verifyRecoveryCode(email, code);
    },

    deleteRecoveryCode: async(id) => {
        return UserRepository.deleteRecoveryCode(id);
    },

    updatePassword: async (email, newPassword) => {
        const hashedPassword = await hash(newPassword, 10);
        const updatedUser = await UserRepository.updatePassword(email, hashedPassword);

        if (!updatedUser) {
            throw new Error("Failed to update password")
        }

        await UserRepository.saveRecoveryCode(email, "", new Date(0));
        return updatedUser;
    },


    getAllAddresses: async() => {
        return UserRepository.getAllAddresses();
    },
    updateUser: async (data, userId) => {
        return UserRepository.updateUser(data, userId);
    },

    sendEmailToResetPassword: async(data) => {
        const {email} = data;
        const user = await UserRepository.findUserByEmail(email);

        if (!user) {
            return "User with this email doesn`t exist";
        }

        const code = Math.floor(1000 + Math.random() * 900).toString();

        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 15);
        await UserRepository.saveRecoveryCode(email, code, expiresAt);

        await MailService.sendEmailToResetPassword(email, code);
        return true;
    }, 

    resetPassword: async (data) => {
        const { email, code, newPassword } = data

        const user = await UserRepository.findUserByEmail(email)

        if (!user){
            return {message: "User not found"}
        }

        const isCodeValid = await UserRepository.verifyRecoveryCode(email, code)

        if (!isCodeValid){
            return {message: "Invalid recovery code"}
        } 

        await UserService.updatePassword(email, newPassword);
        return {message: "Password was changed"};
    },
}
