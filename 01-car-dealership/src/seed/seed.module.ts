import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsService } from 'src/cars/cars.service';
import { BrandsModule } from '../brands/brands.module';
import { CarsModule } from '../cars/cars.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[CarsModule, BrandsModule]
})
export class SeedModule {}
