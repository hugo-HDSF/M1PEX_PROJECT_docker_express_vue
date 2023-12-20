import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import {
  HttpStatusCode
} from "../../../infrastructure/error-handling/http-error/http-status-code";

export class ProductRouter {
  router = Router();

  constructor(private productController: ProductController) {
    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.router.post("add", (req, res, next) => {
      try {
        const result = this.productController.createProduct(req.body.product);
        res.status(HttpStatusCode.Created).json(result);
      } catch (error: unknown) {
        next(error);
      }
    });

    this.router.get("products", (req, res, next) => {
      try {
        const result = this.productController.getProducts();
        res.status(HttpStatusCode.Ok).json(result);
      } catch (error: unknown) {
        next(error);
      }
    });
  }
}