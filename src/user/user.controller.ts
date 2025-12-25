import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { UserControllerContract } from "./user.types";



export const UserController: UserControllerContract = {
    login: async (req, res) => {
        const resp = await UserService.login(req.body)
        if(resp.status == "error"){
            res.status(resp.code).json({message: resp.message})
        }
        res.status(200).json(resp.dataAuth)
        return
    },
    register: async (req, res) => {
        const resp = await UserService.register(req.body)
        if(resp.status == "error"){
            res.status(resp.code).json({message: resp.message})
        }
        res.status(200).json({message: "User Creared. Please, login"})
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
    }, 
    createAddress: async(req, res) => {
        const body = req.body;

        if (!body) {
            res.status(422).json("Body?");
            return;
        }

        if (!body.city) {
            res.status(422).json("City is required.");
            return;
        }

        if (!body.entrance) {
            res.status(422).json("Entrance is required.");
            return;
        }

        if (!body.flat) {
            res.status(422).json("Flat is required.");
            return;
        }

        if (!body.house) {
            res.status(422).json("House is required.");
            return;
        }

        if (!body.street) {
            res.status(422).json("Street is required.");
            return;
        }

        try {
            const address = await UserService.createAddress(body);

            if (!address) {
                res.status(500).json("Creation failed");
                return;
            }

            res.status(201).json(address);

        } catch (error) {
            res.status(500).json("Server Error");
        }
    
    },
    updateAddress: async(req, res)=>{
        const AddressId = +req.params.addressId;
        const body = req.body;

        if (!req.params.addressId) {
            res.status(400).json("Id is validation error");
            return;
        }

        if (isNaN(AddressId)) {
            res.status(400).json("AddressId must be a number");
            return;
        }

        if (!body || typeof body !== 'object') {    
            res.status(422).json("Body?");
            return;
        }

        if (!body.city || typeof body.city !== 'string') {
            res.status(422).json("City is required.");
            return;
        }

        if (!body.entrance || typeof body.entrance !== 'string') {
            res.status(422).json("Entrance is required.");
            return;
        }

        if (!body.flat || typeof body.flat !== 'string') {
            res.status(422).json("flat is required.");
            return;
        }

        const findedAddress = await UserRepository.findAddressByid(AddressId);
        if (!findedAddress) {
            res.status(404).json("No address with such id");
            return;
        }

        const updatedAddress = await UserService.updateAddress(AddressId, body);
        if (!updatedAddress) {
            res.status(500).json("Update failed");
            return;
        }

        res.status(200).json('Address updated successfully');
    },

    deleteAddress: async(req, res)=>{
        const AddressId = +req.params.addressId;
        if (isNaN(AddressId)) {
            res.status(400).json("Id must be a number");
            return;
        }
        const findedAddress = await UserRepository.findAddressByid(AddressId);
        if (!findedAddress) {
            res.status(404).json("No address with such id");
            return;
        }

        const deletedAddress = await UserService.deleteAddress(AddressId);
        if (!deletedAddress) {
            res.status(500).json("Delete failed");
            return;
        }
        res.status(200).json('Address deleted successfully');
    }, 

    getAllAddresses: async(req, res) =>{
        try {
            const resp = await UserService.getAllAddresses()
            res.status(200).json(resp)
        }
        catch (error) {
            res.status(500).json("Server error.")
        }
    }, 

    updateUser: async (req, res) => {
        const userId = Number(req.params.userId); 

        if (isNaN(userId)) {
            res.status(400).json("Invalid userId");
            return;
        }

        const updatedData = req.body;
        
        if (!updatedData || Object.keys(updatedData).length === 0) {
            res.status(422).json("Please enter fields to update");
            return;
        }

        try {
            const response = await UserService.updateUser(updatedData, userId);
            res.status(200).json(response);
        } catch (error: any) {
            res.status(500).json(error.message);
        }
    },

    resetPasswordUsingEmail: async (req, res) => {
        const body = req.body;

        if (!body) {
            res.status(400).json("Body is missing");
            return;
        }

        if (!body.email) {
            res.status(400).json("Email is required");
            return;
        }

        if (typeof body.email !== "string") {
            res.status(400).json("Email must be a string");
            return;
        }

        const email = req.body.email;

        const result = await UserService.sendEmailToResetPassword({ email });

        if (typeof result === "string") {
            res.status(400).json(result);
            return;
        }

        res.status(200).json("Rmail was sended");
    },


    resetPassword: async (req, res) => {
        const body = req.body;
        
        if (!body) {
            res.status(400).json("Request body is missing");
            return;
        }

        if (!body.email) {
            res.status(400).json("Email is required");
            return;
        }

        if (!body.code) {
            res.status(400).json("Recovery code is required");
            return;
        }

        if (!body.newPassword) {
            res.status(400).json("New password is required");
            return;
        }

        if (typeof body.email !== "string") {
            res.status(400).json("Email must be a string");
            return;
        }

        if (typeof body.code !== "string") {
            res.status(400).json("Code must be a string");
            return;
        }

        if (typeof body.newPassword !== "string") {
            res.status(400).json("Password must be a string");
            return;
        }

        if (body.newPassword.length < 8) {
            res.status(400).json("Password must be at least 8 characters");
            return;
        }

        const email = req.body.email
        const code = req.body.code
        const newPassword = req.body.newPassword

        const resetPassword = await UserService.resetPassword({
            email,
            code,
            newPassword,
        });

        if (typeof resetPassword === "string") {
            res.status(400).json(resetPassword);
            return;
        }

        res.status(200).json("Password successfully changed");
    },

};
