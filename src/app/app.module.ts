import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app.home';
import { CarDashComponent } from './CarDashboard/CarDash.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AppHomeComponent,
    CarDashComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
