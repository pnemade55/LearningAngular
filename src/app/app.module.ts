import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app.home';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AppHomeComponent
  ],
  bootstrap: [
    AppComponent,
    AppHomeComponent
  ]
})
export class AppModule { }
