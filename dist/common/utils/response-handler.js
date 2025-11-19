"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
const common_1 = require("@nestjs/common");
class ResponseHandler {
    static success(data, message = 'Request successfull') {
        return { status: 'success', message, data };
    }
    static error(message, statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        throw new common_1.HttpException({
            status: 'error',
            message,
        }, statusCode);
    }
}
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response-handler.js.map