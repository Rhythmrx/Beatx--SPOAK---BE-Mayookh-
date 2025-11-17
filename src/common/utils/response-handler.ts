import { HttpException, HttpStatus } from '@nestjs/common';

export class ResponseHandler {
  static success(data: any, message = 'Request successfull') {
    return { status: 'success', message, data };
  }
  static error(message: string, statusCode = HttpStatus.INTERNAL_SERVER_ERROR) {
    throw new HttpException(
      {
        status: 'error',
        message,
      },
      statusCode,
    );
  }
}
