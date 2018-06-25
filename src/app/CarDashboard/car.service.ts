import { Injectable} from '@angular/core';
import { ICar } from './car.model';

@Injectable()

export class CarService {
  getCars(): any[] {
    return[
            {
              id: 1,
              brand: 'Ford',
              model: 'Mustang',
              rating: 4.7,
              price: 200,
              image: 'https://vimg.remorainc.com/jll/1fa6p8th1j5107722/2018-ford-mustang-kona-blue-metallic-0-m.jpg',
              description: 'The Ford Mustang is an American car manufactured by Ford.'
          },
          {
              id: 2,
              brand: 'Nissan',
              model: 'Altima',
              rating: 2.4,
              price: 125,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QL3zsiTJZ489ExB_bWgioyERusSSZbY7ijHciRRBndtfkP_kVg',
              description: 'The Nissan Altima is a mid-size car which has been manufactured by Nissan since 1992'
          },
          {
              id: 3,
              brand: 'Honda',
              model: 'City',
              rating: 4,
              price: 11,
              image: 'https://imgd.aeplcdn.com/370x208/cw/ec/26755/Honda-City-Exterior-118804.jpg?wm=0&q=85)',
              description: 'The Honda City is a compact car which has been produced by the Japanese manufacturer Honda since 1981'
          },
          {
              id: 4,
              brand: 'Maruti',
              model: 'Ciaz',
              rating: 3.5,
              price: 10,
              image: 'https://imgd.aeplcdn.com/370x208/cw/ec/26755/Honda-City-Exterior-118804.jpg?wm=0&q=85)',
              description: 'The Suzuki Ciaz is a compact car produced by Suzuki, developed to replace the Suzuki SX4 Sedan.'
          }
        ];
  }
}
