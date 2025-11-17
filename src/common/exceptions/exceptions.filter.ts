import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const isHttpException = exception instanceof HttpException;
    const status = isHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = isHttpException
      ? exception.getResponse()
      : 'Internal server error';

    this.logger.error({
      timestamp: new Date().toISOString(),
      path: request?.url,
      exception,
    });
    const normalizedMessage =
      typeof message === 'string'
        ? message
        : (message as any).message || JSON.stringify(message);

    response.status(status).json({
      status: 'error',
      message: normalizedMessage,
    });
  }
}
