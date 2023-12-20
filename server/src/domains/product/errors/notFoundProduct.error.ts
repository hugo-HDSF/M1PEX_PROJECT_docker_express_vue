import { AppError } from '../../../infrastructure/error-handling/app-error/app-error';
import { AppErrorCode } from '../../../infrastructure/error-handling/app-error/app-error-code';

export class NotFoundProductError extends AppError {
    constructor(productId: string) {
        super(AppErrorCode.NotFoundProduct);
        this.message = this.formatMessage(productId);
    }

    private formatMessage(productId: string): string {
        return `Product ID "${productId}" not found.`;
    }
}
