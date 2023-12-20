import {
  productDTOValidator,
  ProductDTO,
} from "../../../model/DTO/product.DTO";
import {
  HttpError
} from "../../../infrastructure/error-handling/http-error/http-error";
import {
  HttpStatusCode
} from "../../../infrastructure/error-handling/http-error/http-status-code";
import { ProductRepository } from "../../../model/repository/product.repository";
import { Product } from "@prisma/client";
import { isUuid } from "../../../helpers/utils";

export class ProductController {
  constructor(
    private productService: ProductRepository
  ) {
  }

  createProduct(productDTO: ProductDTO): Promise<Product> {
    if (productDTOValidator.parse(productDTO))
      return this.productService.createProduct(productDTO);
    else
      throw new HttpError(
        HttpStatusCode.BadRequest,
        "Invalid product data."
      );
  }

  updateProduct(productId: string, productDTO: ProductDTO): Promise<Product> {
    if (productDTOValidator.parse(productDTO) && isUuid(productId))
      return this.productService.updateProduct(productId, productDTO);
    else
      throw new HttpError(
        HttpStatusCode.BadRequest,
        "Invalid product data."
      );
  }

  getProducts(): Promise<Product[]> {
    return this.productService.findProducts();
  }
}