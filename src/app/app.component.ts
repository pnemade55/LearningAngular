import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-app',
    template: `
        <div class="container">
         Welcome to angular5
        </div>
        <my-home></my-home>
    `
})
export class AppComponent { }
