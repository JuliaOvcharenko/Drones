import { CategoryService } from "./category.service";
import { CategoryControllerContract } from "./category.types";



export const CategoryController: CategoryControllerContract = {
    getAllCategories: async (req, res) => {
        try {
            const resp = await CategoryService.getAllCategories()
            res.status(200).json(resp)
        }
        catch (err) {
            console.log(err)
            res.status(500).json("server error")
        }
    }
}