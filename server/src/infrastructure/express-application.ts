import { ErrorHandlerService } from './error-handling/error-handler.service';
import { ExpressRouter } from './express-router';
import { ExpressServer } from './express-server';
import * as dotenv from 'dotenv';
import { PrismaService } from "../../prisma/service/prisma.service";
import { ProductService } from "../domains/product/service/product.service";
import { ProductRepository } from "../model/repository/product.repository";
import { PrismaClient } from "@prisma/client";

export class ExpressApplication {
    private allowedMainOrigin!: string;
    private errorHandlerService!: ErrorHandlerService;
    private expressRouter!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private productService!: ProductRepository;
    private prismaService!: PrismaClient;

    constructor() {
        this.configureApplication();
    }

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureVariables();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env',
        });
    }

    private configureVariables(): void {
        this.configureAllowedMainOrigin();
        this.configureServerPort();
    }

    private configureAllowedMainOrigin(): void {
        this.allowedMainOrigin = this.getAllowedMainOrigin();
    }

    private getAllowedMainOrigin(): string {
        const allowedMainOrigin = process.env.ALLOWED_MAIN_ORIGIN;
        if (!allowedMainOrigin) {
            throw new Error('No allowed main origin was found in env file.');
        }

        return allowedMainOrigin;
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in env file.');
        }

        return port;
    }

    private configureServices(): void {
        this.errorHandlerService = new ErrorHandlerService();
        this.productService = new ProductRepository();
        this.prismaService = new PrismaClient();
    }

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(this.productService);
    }

    private configureServer(): void {
        this.server = new ExpressServer(
            this.allowedMainOrigin,
            this.errorHandlerService,
            this.expressRouter,
            this.port,
        );
    }
}
