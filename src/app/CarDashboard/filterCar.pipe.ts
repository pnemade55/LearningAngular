import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from './car.model';

@Pipe({
    name: 'carFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: ICar[], filterBy: string) {
      return value;
      }
}
