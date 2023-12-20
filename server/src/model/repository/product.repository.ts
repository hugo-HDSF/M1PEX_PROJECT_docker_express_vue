import getPrismaClient from "../../../prisma/service/prismaClient.service";
import { ProductService } from "../../domains/product/service/product.service";
import { ProductDTO } from "../DTO/product.DTO";
import { Product } from "../entity/product.entity";

const prismaClient = getPrismaClient();

export class ProductRepository implements ProductService {
  createProduct = async (productDTO: ProductDTO): Promise<Product> => {
    return new Product(await prismaClient.product.create({
      data: {
        name: productDTO.name,
        brand: productDTO.brand,
        category: productDTO.category,
        description: productDTO.description,
        imageURL: productDTO.imageURL,
        ingredients: productDTO.ingredients.join(",")
      }
    }));
  };

  updateProduct = async (productId: string, productDTO: ProductDTO): Promise<Product> => {
    return new Product(await prismaClient.product.update({
      where: { id: productId },
      data: {
        name: productDTO.name,
        brand: productDTO.brand,
        category: productDTO.category,
        description: productDTO.description,
        imageURL: productDTO.imageURL,
        ingredients: productDTO.ingredients.join(",")
      }
    }));
  }

  findProducts = async (): Promise<Product[]> => {
    return (await prismaClient.product.findMany()).map(product => new Product(product));
  };
}
