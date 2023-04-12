import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto'

/** 
 * Controlador
 * Ejemplo: el nombre del controlador es carcontroller pero tiene eun decorador
 * que contiene el nombbre de cars esa es la ruta que va a mostar el api
 * por ejemplo : localhost:3000/cars
 * 
*/

@Controller('cars')
export class CarsController {


    // @Get(); esto fuynciona como el decorador que le proporciona que tipo de metodo es
    /**
     * para poder obterner los valorde que tiene getallcar se necesita decorar el metodo con
     * ele metodo http Get()
     * 
     */

    //CRUD

    constructor(
        private  readonly carsService : CarsService 
    ){}

    @Get()
    getAllCars(){
        return  this.carsService.findAll();
    }


    /**
     * para recibir valores por url es decir valors desde el path se agrega de la siguiente manera
     * localhost:3000/cars/1
     * @Get(':id') asi con dos punto y el nombre que le asignas a lo que va a recibir
     * el endpoint
     * @param('id') asi le decimos al metodo que el valor que va a recibir viene sde e
     * los params de la url
     */

    /**
     * los pipes son utilies para trasnformar la data
     * eso sirve para que estatus code se el correcto 
     * por ejemploo  se se recib un string en lugar de un int 
     * el pipe parseintpipe lo dfiltra y si ahy un error lo cuemtra en 
     * ek estado code 400
     */
    @Get(':id')
    getCarById( @Param('id',ParseUUIDPipe) id: string ){
        return this.carsService.findOneById( id );
    }

    // Se utiliza para crear un recurso
    @Post()
    createCar( @Body() createCarDto: CreateCarDto ){

        // creacuib de carro
        const newCar = this.carsService.create(createCarDto);
        return newCar;
        // return {
        //     id: 'ok',
        //     method: 'POST'
        // }
    }

    @Patch(':id')
    UpdateCar(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDto:UpdateCarDto 
        ){

        return this.carsService.update(id,updateCarDto);
        // return {
        //     id: 'ok',
        //     method: 'POST'
        // }
    }


    @Delete(':id')
    DeleteCar( @Param('id', ParseIntPipe) id:number ){

        // return body;
        return {
            id,
            method: 'DELETE'
        }
    }



}
