import { UserService } from "./user.service";
import { UserControllerContract } from "./user.types";



export const UserController: UserControllerContract = {
    login: async (req, res) => {
        const resp = await UserService.login(req.body)
        if(resp.status == "error"){
            res.status(resp.code).json({message: resp.message})
        }
        res.status(200).json(resp.dataAuth)
    },
    register: async (req, res) => {
        const resp = await UserService.register(req.body)
        if(resp.status == "error"){
            res.status(resp.code).json({message: resp.message})
        }
        res.status(200).json(resp.dataAuth)
    },
    me: async (req, res) => {
        if(req.body){
            console.log("yes")
        }
        const resp = await UserService.me(res.locals.userId)
        if(resp.status == "error"){
            res.status(resp.code).json({message: resp.message})
        }
        res.status(200).json(resp.dataUser)
    }
}