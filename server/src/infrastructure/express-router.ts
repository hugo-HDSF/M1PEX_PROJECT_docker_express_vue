import { Router } from 'express';
import { ProductController } from "../domains/product/controller/product.controller";
import { ProductRouter } from "../domains/product/router/product.router";
import { ProductService } from "../domains/product/service/product.service";
import { ProductRepository } from "../model/repository/product.repository";

export class ExpressRouter {
    router = Router();

    private productController!: ProductController;
    private productRouter!: ProductRouter;

    constructor(private productService: ProductRepository) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.productController = new ProductController(this.productService)
    }

    private configureRouters(): void {
        this.productRouter = new ProductRouter(this.productController);
    }

    private configureRoutes(): void {
        this.router.use('/product', this.productRouter.router);
    }
}
