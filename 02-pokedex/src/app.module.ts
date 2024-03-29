import { join } from 'path'; //node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
  rootPath: join(__dirname,'..','public'),
  }),
    MongooseModule.forRoot('mongodb://localhost:27018/nest-pokemon'), // conexion a la base de datos
    PokemonModule
  ],
})
export class AppModule {}
