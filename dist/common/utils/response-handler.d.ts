import { HttpStatus } from '@nestjs/common';
export declare class ResponseHandler {
    static success(data: any, message?: string): {
        status: string;
        message: string;
        data: any;
    };
    static error(message: string, statusCode?: HttpStatus): void;
}
