import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'car-dash',
  templateUrl: './CarDash.component.html'
})

export class CarDashComponent {
  title: String= 'Welcome to Car Point';
    showtable: Boolean= true;
    showImage: Boolean= false;

  cars: any[]= [
      {
          id: 1,
          brand: 'Ford',
          model: 'Mustang',
          year: 1985,
          image: 'https://vimg.remorainc.com/jll/1fa6p8th1j5107722/2018-ford-mustang-kona-blue-metallic-0-m.jpg',
          description: 'The Ford Mustang is an American car manufactured by Ford.'
      },
      {
          id: 2,
          brand: 'Nissan',
          model: 'Altima',
          year: 2017,
          image: 'https://www.longviewnissan.com/assets/inventory/vehicles/1n4al3ap6jc218149/ip/thumbs/1-320.jpg',
          description: 'The Nissan Altima is a mid-size car which has been manufactured by Nissan since 1992'
      },
      {
          id: 3,
          brand: 'Honda',
          model: 'City',
          year: 2017,
          image: 'https://imgd.aeplcdn.com/370x208/cw/ec/26755/Honda-City-Exterior-118804.jpg?wm=0&q=85)',
          description: 'The Honda City is a compact car which has been produced by the Japanese manufacturer Honda since 1981'
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  toggleTable(): void {
    this.showtable= !this.showtable;
  }
}
