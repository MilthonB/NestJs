
import { IsString } from "class-validator";

/**
 * Los dto son la estructura el esquema de como se 
 * quiere recibir la data atravez de un post put
 * etc
 */


export class CreateCarDto{
    
    @IsString({ message:`Mensaje personalizado` })
    readonly brand:string;


    @IsString()
    readonly model: string;

}
