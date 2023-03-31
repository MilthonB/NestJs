import { Controller, Get, Param } from '@nestjs/common';


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

    private car = ['toyota', 'honda', 'jeep'];

    
    getAllCars(){
        return  this.car;
    }


    /**
     * para recibir valores por url es decir valors desde el path se agrega de la siguiente manera
     * localhost:3000/cars/1
     * @Get(':id') asi con dos punto y el nombre que le asignas a lo que va a recibir
     * el endpoint
     * @param('id') asi le decimos al metodo que el valor que va a recibir viene sde e
     * los params de la url
     */
    @Get(':id')
    getCarById( @Param('id') id: string ){
        return this.car[id];
    }

}
