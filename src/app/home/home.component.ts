import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})
export class Home {
  technologies = [ 'Angular2 Final', 'jQuery', 'Bootstrap with Javascript components', 'Font-awesome', 'The Angular2 router already set-up' ];
  
  click() {
    alert('Or not...');
  }
}