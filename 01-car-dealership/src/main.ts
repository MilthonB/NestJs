import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true, // lo deja la data que se espera en el post, data basura la sac
      forbidNonWhitelisted: true // retorna bad reques 400 si en el body del post viene basura 
    }),
  )
  
  await app.listen(3000);
}
bootstrap();
