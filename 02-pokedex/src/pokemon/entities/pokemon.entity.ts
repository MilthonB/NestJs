import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// la clase se tiene que extender de Document para obtener 
@Schema() // Asignar que es un schema de una base de datos
export class Pokemon extends Document {

    // id: string // Mongo lo asigna

    // Asignar propiedades a los valores de la tabla 
    @Prop({
        unique: true,
        index: true
    })
    name: string;

    @Prop({
        unique: true,
        index: true
    })
    no: string;

}

// Se exporta un schema con elo documento creado
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);



