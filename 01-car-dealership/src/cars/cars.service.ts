import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto, UpdateCarDto } from './dto'


@Injectable()
export class CarsService {


    // Obligas a car que sea de tipo car y que cumpla con lo requerido

    private car: Car[] = [
        {
            id:uuid(),
            brand:'Toyota',
            model: 'Corolla'
        },
        {
            id:uuid(),
            brand:'Honda',
            model: 'Civic'
        },
        {
            id:uuid(),
            brand:'Jeep',
            model: 'Chrokey'
        },
    ];


    findAll(){
        return this.car;
    }

    findOneById(id:string){



        const car = this.car.find(car => car.id === id);
        
        if(!car){
            //mensaje de error 400 mas rapido en nest que en express node 
            throw new NotFoundException(`Car with id ${id} not found`);
        }

        return car;
    }

    create(createCarDto: CreateCarDto){

        
        const car:Car = {
            id:uuid(),
            ...createCarDto
        };

        this.car.push(car);
        return car;
        
    }

    update( id:string, updateCarDto: UpdateCarDto ){

    }




}
