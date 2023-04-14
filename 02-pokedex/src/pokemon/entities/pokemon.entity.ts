import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


// Definicion de las colecciones o documentos
@Schema()
export class Pokemon extends Document{

    //id:string mongo lo define

    // prop asigna propiedades a los valores e schema
    @Prop({
        unique:true,
        index:true
    })
    name: string;
    
    @Prop({
        unique:true,
        index:true
    })
    no: number;


}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon )


