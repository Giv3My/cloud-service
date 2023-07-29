import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';

async function start() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.enableCors({ credentials: true, origin: true });

  const config = new DocumentBuilder()
    .setTitle('Cloud storage')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(5000);
}

start();
