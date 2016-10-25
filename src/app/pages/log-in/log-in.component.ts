import { Component, Input } from '@angular/core';

import { Guardian } from '../../core/guardian/guardian.service';
import { IUser } from '../../core/entities/user/user.interface';

@Component({
  selector: 'log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: [ 'log-in.component.css' ]
})
export class LogIn {
  email: string = 'toto@gmail.com';
  password: string = 'totototo';
  message: string;

  constructor(private guardian: Guardian) {
  }

  private logIn() {
    this.message = '';
    
    if (this.email && this.password) {
      this.guardian.logIn(this.email, this.password).subscribe(result => console.log(result));
    } else {
      this.message = 'All fields must be filled in.'
    }
  }
}