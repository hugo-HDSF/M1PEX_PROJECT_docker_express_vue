import { ProductDTO } from "../../../model/DTO/product.DTO";
import { Product } from "@prisma/client";

export interface ProductService {
    createProduct(productDTO: ProductDTO): Promise<Product>;
    updateProduct(productId: string, productDTO: ProductDTO): Promise<Product>;
    findProducts(): Promise<Product[]>;
}
