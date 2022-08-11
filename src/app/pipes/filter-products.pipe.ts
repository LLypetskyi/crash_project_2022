import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../data/products';
import { IProduct } from 'src/app/models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[]  {
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
