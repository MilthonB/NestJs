import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {


    private car = [
        {
            id:1,
            brand:'Toyota',
            model: 'Corolla'
        },
        {
            id:2,
            brand:'Honda',
            model: 'Civic'
        },
        {
            id:3,
            brand:'Jeep',
            model: 'Chrokey'
        },
    ];


    findAll(){
        return this.car;
    }

    findOneById(id:number){

        

        const car = this.car.find(car => car.id == id);
        

        return car;
    }




}
