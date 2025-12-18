import { Prisma } from "../generated/prisma"
import { Request, Response } from "express";


export type User = Prisma.UserGetPayload<{}>;

export type UserWithoutPassword = Prisma.UserGetPayload<{omit: {password: true}}>;

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
    tocken: string
}

export interface AuthenticatedUser {
	id: number;
}

export interface ErrorResponse{
    message?: string
}

export interface ServiceResponse { //тип відповіді
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
}

export interface UserServiceContract {
    login(credentials: LoginCredentials): Promise<ServiceResponse>;
    register(credentials: RegisterCredentials): Promise<ServiceResponse>;
    me(userId: number): Promise<ServiceResponse>
}

export interface UserRepositoryContract {
    findUserByEmail(email: string): Promise<User | null>
    createUser(dataFromUser: UserCreate): Promise<UserCreate | null>
    getUserWithoutPasswordById(id: number): Promise<UserWithoutPassword | null>
}

