import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {

  // Iyección del modelo para eso se tiene que hacer o añadir un decorador 
  // a la iyeccion del modelo @injectModel es para poder inyecatr servicio y pertenece a mongoose de nest
  // El modelo es la tabla 

  constructor( 
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon> ){}

  async create(createPokemonDto: CreatePokemonDto) {
  
    createPokemonDto.name = createPokemonDto.name.toLowerCase(); 

    // Para operar el error 500 que genera cuando una key esta duplicada en la bd
    try{
      const pokemon  = await this.pokemonModel.create( createPokemonDto )
      return pokemon;

    }catch(error){
      // si el codigo es 11000 (Leer el resultado del error en la consola para conocer el código)
      if(error.code === 11000){
        throw new BadRequestException(`Pokemon exists in db ${ JSON.stringify(  error.keyValue) }`)
      }

      console.log(error);
      throw new InternalServerErrorException(` Can't create pokemon - check server logs `);
      

    }

  
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
