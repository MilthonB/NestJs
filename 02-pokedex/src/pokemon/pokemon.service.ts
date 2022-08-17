import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
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
      this.handleExceptions(error)

    }

  
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {

    let pokemon: Pokemon;
    
    //Numero del pokemon
    if ( !isNaN(+term) ){ // Si esto es un número entonces...

      pokemon = await this.pokemonModel.findOne({no: term})
      
    }
    
    //MongoId del pokemon
    
    if ( !pokemon && isValidObjectId(term) ){
      
      pokemon = await this.pokemonModel.findById( term )
    }
    
    
    //Name del pokemon
    if( !pokemon ){

      pokemon = await this.pokemonModel.findOne({name: term.toLocaleLowerCase().trim() } )

    }
    


    if( !pokemon ) throw new NotFoundException( `Pokemon with id, name or no"${term}"`)

    
    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    // Verificar si exixte en la base de datos 
    const pokemon = await this.findOne(term)

    // Si dentro de la actualización esta el nombre entonces ese nombre se 
    // trasnforma en minusculas
    if( updatePokemonDto.name )
        updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase().trim()

    try{

      await pokemon.updateOne( updatePokemonDto )
      return { ...pokemon.toJSON(), ...updatePokemonDto }

    }catch(error){ // Error muy generico 
      this.handleExceptions(error)

    }

    // return pokemon
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }


  private handleExceptions( error: any ){

    if(error.code === 11000){
      throw new BadRequestException(`Pokemon exists in db ${ JSON.stringify(  error.keyValue) }`)
    }

    console.log(error);
    throw new InternalServerErrorException(` Can't create pokemon - check server logs `);
    

  }
}
