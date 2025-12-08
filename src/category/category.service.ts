
import { CategoryRepository } from "./category.repository";
import { CategoryServiceContract } from "./category.types";


export const CategoryService: CategoryServiceContract = {
    getAllCategories: () => {
        return CategoryRepository.getAllCategories();
    }
}