import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { type Response, type Request } from 'express';

@Catch(HttpException)
export class HttpExceptionFilters<T extends HttpException> {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status= exception.getStatus();
    const exceptionResponse = exception.getResponse();
    const error = typeof response === "string" ? { message: exceptionResponse } : exceptionResponse as object;

    response.status(status).json({
      ...error,
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}