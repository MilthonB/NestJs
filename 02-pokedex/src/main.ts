import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2') // prefijo global para el endpoint

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que se espera
      forbidNonWhitelisted: true, // Lanza un 400 con los compos que vienen pero que no estan en la whitelist
    })
  );
  
  await app.listen(3000);
}
bootstrap();
