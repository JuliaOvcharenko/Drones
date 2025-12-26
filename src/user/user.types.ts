import { Prisma } from "../generated/prisma"
import { Request, Response } from "express";


export type User = Prisma.UserGetPayload<{}>;
export type UserWithoutPassword = Prisma.UserGetPayload<{omit: {password: true}}>;
export type UpdateUser = Prisma.UserUpdateInput


export interface SendCode{
    email: string
}

export interface ResetPassword{
    email: string;
    newPassword: string;
    code: string;
}

export interface codeResponse{
    message?: string
}

export type VerificationCode = Prisma.verificationCodeGetPayload<{}>;


export type Address = Prisma.AddressGetPayload<{}>
export type CreateAddress = Prisma.AddressUncheckedCreateInput
export type UpdateAddress = Prisma.AddressUpdateInput


export type LoginCredentials = {
    email: string
    password: string
}

export type RegisterCredentials = {
    name: string
    email: string
    password: string
    passwordConfirm: string
}

export interface UserAuthenticationResponse{
    token: string
}

export interface AuthenticatedUser {
	id: number;
}

export interface ErrorResponse{
    message?: string
}

export interface ServiceResponse { 
    status: "success" | "error"
    dataUser?: UserWithoutPassword
    dataAuth?: UserAuthenticationResponse
    message: string
    code: number
}

export type UserCreate = Prisma.UserUncheckedCreateInput

export interface UserControllerContract {
    login: (
        req: Request<
            object,
            UserAuthenticationResponse | { message: string },
            LoginCredentials,
            object
        >,
        res: Response<UserAuthenticationResponse | { message: string }>,
    ) => void;
    register: (
        req: Request<object, UserAuthenticationResponse | { message: string }, RegisterCredentials, object>,
        res: Response<UserAuthenticationResponse | { message: string }>,
    ) => void;
    me: (
        req: Request<object, UserWithoutPassword | { message: string }, object, object, { userId: number }>,
        res: Response<UserWithoutPassword | { message: string }, { userId: number }>,
    ) => void;
    createAddress: (
        req: Request<object, Address|string, CreateAddress, object>, 
        res: Response<Address|string>) => void;

    deleteAddress: (
        req: Request<{addressId: number}, Address | string, object >,
        res: Response<Address | string>
    ) => void;

    updateAddress: (
        req: Request<{addressId: number}, Address | string, UpdateAddress>,
        res: Response<Address | string>
    ) => void;

        
    getAllAddresses: (
        req: Request<void, Address[] | string, void, void>,  
        res: Response<Address[] | string>
    ) => void;

    updateUser: (
        req: Request<{userId: number}, User | string, UpdateUser, object>,
        res: Response<User | string>
    ) => void,

    resetPasswordUsingEmail: (
        req: Request<{}, ResetPassword, ResetPassword, {}>,
        res: Response<ResetPassword | string>) => void;

    resetPassword: (
        req: Request<{}, string, ResetPassword, {}>,
        res: Response<string>
    ) => Promise<void>;
}

export interface UserServiceContract {
    login(credentials: LoginCredentials): Promise<ServiceResponse>;
    register(credentials: RegisterCredentials): Promise<ServiceResponse>;
    me(userId: number): Promise<ServiceResponse>;
    updateUser: (data: UpdateUser, id: number) => Promise<User | string>

    createAddress:(addressData: CreateAddress) => Promise<Address | null>,
    deleteAddress: (id: number) => Promise<Address | string>
    updateAddress: (id: number, updateAddressData: UpdateAddress) => Promise<Address | string>
    getAllAddresses: () => Promise<Address[] | undefined>

    sendEmailToResetPassword(data: SendCode): Promise<true | string>
    resetPassword(data: ResetPassword): Promise<{ message: string }>;

    verifyRecoveryCode(email: string, code: string): Promise<boolean>;
    updatePassword(email: string, newPassword: string): Promise<User>;
    deleteRecoveryCode(email: string): Promise<VerificationCode>
}

export interface UserRepositoryContract {
    findUserByEmail(email: string): Promise<User | null>
    findAddressByid(id: number): Promise<Address | null>

    updateUser: (data: UpdateUser, id: number) => Promise<User | string>
    createUser(dataFromUser: UserCreate): Promise<UserCreate | null>
    getUserWithoutPasswordById(id: number): Promise<UserWithoutPassword | null>

    saveRecoveryCode(email: string, code: string, expiresAt: Date): Promise<VerificationCode>;
    verifyRecoveryCode(email: string, code: string): Promise<boolean>;
    updatePassword(email: string, newPassword: string): Promise<User>;
    deleteRecoveryCode(email: string): Promise<VerificationCode>

    createAddress:(addressData: CreateAddress) => Promise<Address | null>
    deleteAddress: (id: number) => Promise<Address>
    updateAddress: (id: number, updateAddressData: UpdateAddress) => Promise<Address>
    getAllAddresses: () => Promise<Address[] | undefined>
}

export interface MailServiceContract {
    sendEmailToResetPassword(email: string, code: string): Promise<void>;
}