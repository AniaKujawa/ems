/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { HttpExceptionFilters } from './app/filters/https-exception-filter';
import { ApiGuard } from './app/guards/api-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //remove extra fields from payloads
    transform: true // try to transform to instance of data, transform of url params to declared primitive type (e.g. number)
  }));
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new HttpExceptionFilters());
  app.useGlobalGuards(new ApiGuard());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('MEWA API')
    .setDescription('The endpoints')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
