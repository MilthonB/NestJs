import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {


  private  brands: Brand[] = [
    {
        id: uuid(),
        name:'Toyota',
        createAt: new Date().getTime()
    }
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createAt: new Date().getTime()
      
    }

    this.brands.push(newBrand)

    return {
      ...createBrandDto
    }
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {

    const brans = this.brands.find(  brand => brand.id === id );
    if(!brans)
      throw new NotFoundException('Id not is accept')

      return brans

  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandsDB: Brand = this.findOne(id)

    if (!brandsDB.id && brandsDB.id != id)
        throw new NotFoundException("Is no valid");
    
    this.brands = this.brands.map( brand => {
      if(brand.id == id){
        brandsDB.updateAt = new Date().getTime()
        brandsDB = {
          ...brandsDB, ...updateBrandDto
        }
        return brandsDB
      }

      return brand

    })
         


    return brandsDB;
  }

  remove(id: string) {
    
    const brand = this.findOne(id)

    this.brands = this.brands.filter( brand => brand.id !== id )

    return {
      id,
      message: `Elemtn with id ${id} was delete DB`
    }



  }
}
