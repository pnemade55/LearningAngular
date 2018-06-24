import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app.home';
import { CarDashComponent } from './CarDashboard/CarDash.component';
import { UpperValuePipe } from './CarDashboard/Filter.Car.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AppHomeComponent,
    CarDashComponent,
    UpperValuePipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
