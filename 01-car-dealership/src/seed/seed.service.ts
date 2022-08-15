import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';

import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANS_SEED } from './data/brans.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService:BrandsService
  ) { }


  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillbrandsWithSeedData(BRANS_SEED)
    return 'SEED executed'
  }


}
