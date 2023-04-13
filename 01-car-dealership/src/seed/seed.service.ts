import { Injectable } from '@nestjs/common';

import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {



  constructor( private readonly carService: CarsService,
    private readonly brandService: BrandsService ){}
  

  populateDB() {
    
    this.carService.fillCarsWithSeedDate(CARS_SEED)
    this.brandService.fillBrandWithSeedDate(BRANDS_SEED)
    
    return 'Seded executed'
  }

  
}
