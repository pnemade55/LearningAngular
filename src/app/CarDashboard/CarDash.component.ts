import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'car-dash',
  templateUrl: './CarDash.component.html',
  styleUrls: ['./CarDash.component.css']

})

export class CarDashComponent implements OnInit {
    title: String= 'Welcome to Car Point';
    showtable: Boolean= true;
    showImage: Boolean= false;
    FilterData: String;
    imageWidth = 200;
    cars: any[];

    constructor (private _carService: CarService ) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  toggleTable(): void {
    this.showtable = !this.showtable;
  }

  ngOnInit(): void {
    this.cars = this._carService.getCars();
  }

}
