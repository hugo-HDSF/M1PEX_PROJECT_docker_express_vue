//create a product DTO
import { z } from "zod";

export class ProductDTO {
    constructor(
        public name: string,
        public brand: string,
        public category: string,
        public description: string,
        public imageURL: string | null,
        public ingredients: string[],
    ) { }
}

export const ingredientNamesDTOValidator = z.array(z.string().max(40, "Ingredient name must be 40 characters or less."));

export const productDTOValidator = z.object({
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required"),
    imageURL: z.string().url().nullable(), // Assuming imageURL should be a valid URL or null
    ingredients: ingredientNamesDTOValidator
});