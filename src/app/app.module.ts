import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app.home';
import { CarDashComponent } from './CarDashboard/CarDash.component';
import { UpperValuePipe } from './CarDashboard/UpperValue.pipe';
import { CarFilterPipe } from './CarDashboard/filterCar.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AppHomeComponent,
    CarDashComponent,
    UpperValuePipe,
    CarFilterPipe,
    StarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
