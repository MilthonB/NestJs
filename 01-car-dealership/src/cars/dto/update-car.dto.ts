
import { Optional } from "@nestjs/common";
import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

/**
 * Los dto son la estructura el esquema de como se 
 * quiere recibir la data atravez de un post put
 * etc
 */


export class UpdateCarDto{
    

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message:`Mensaje personalizado` })
    @IsOptional()
    readonly brand?:string;
    
    
    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model?: string;

}
