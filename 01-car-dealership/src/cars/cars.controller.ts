import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Controller('api/cars')
export class CarsController {


    constructor( private readonly carsService: CarsService ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll()
    }

    @Get(":id")
    getCarById( @Param('id',  new ParseUUIDPipe({ version:'4' })) id:string){
        console.log(id);
        
        return {
            id,
            car: this.carsService.findOneById(id)
        }
    }


    @Post()
    createCar( @Body() createCarDto: CreateCarDto ) {
        return {
            car : this.carsService.create(createCarDto)
        }
    }

    @Patch(':id')
    updateCar( @Body() updateCarDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string ) {
        return {
            updateCarDto
        }
    }

    @Delete(':id')
    deleteCar( @Param('id') id: string ) {
        return {
            id,
            method: 'delete'
        }
    }

}
