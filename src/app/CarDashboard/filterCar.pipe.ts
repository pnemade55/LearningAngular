import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from './car.model';

@Pipe({
    name: 'carFilter'
})

export class CarFilterPipe implements PipeTransform {
    transform(value: ICar[], filterBy: string) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((car: ICar) =>
        car.model.toLowerCase().indexOf(filterBy) !== -1 ) : value;
      }
}
