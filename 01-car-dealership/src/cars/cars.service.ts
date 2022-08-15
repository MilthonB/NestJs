import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from "uuid";
import { CreateCarDto,UpdateCarDto } from './dto';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:uuid(),
            brand: 'Nissan',
            model: 'NP300'
        },
        {
            id:uuid(),
            brand: 'Chevrolet',
            model: 'S10'
        },
    ]


    findAll(){
        return this.cars;
    }

    findOneById(id: string){

        const car = this.cars.find((car) => car.id == id);

        if (!car) throw new NotFoundException(` Car  with id '${id} not found'`);
        
        
        return car

    }


    create (creteCarDto : CreateCarDto){

        const car: Car = {
            id: uuid(),
            ...creteCarDto // operador
        }  

        // desestructuracion de createcaardto {}
        // const car: Car = {
        //     id: uuid(),
        //     brand: brand,
        //     model: model
        // }  

        // const car: Car = {
        //     id: uuid(),
        //     brand: creteCarDto.brand,
        //     model: creteCarDto.model
        // }  

        this.cars.push(car)

        return car;
    }


    update(id: string, updateCarDto:UpdateCarDto){

        let carDB = this.findOneById(id);

        if( !updateCarDto.id && updateCarDto.id != id )
            throw new BadRequestException('Car id is not valid inside body')

        
        
        this.cars = this.cars.map(car => {
            if (car.id == id){
                const carDB = {
                    ...car,id,... updateCarDto
                }
                return carDB
            }
            return car
        })

        return carDB


    }


    delete( id: string ){
        
        const car = this.findOneById(id);

        this.cars = this.cars.filter( car => car.id !== id)

        return; //undefined

    }

}
