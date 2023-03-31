import { Controller, Get } from '@nestjs/common';


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

    @Get()
    getAllCars(){
        return ['toyota', 'honda', 'jeep'] 
    }

}
