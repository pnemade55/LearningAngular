import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-app',
    template: `
        <div class="container">

          <h3>This is Angular 5</h3>

          <car-dash></car-dash>

          <my-home></my-home>

        </div>
    `
})
export class AppComponent { }
