import { Component, Input } from '@angular/core';

import { Guardian } from '../../core/guardian/guardian.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: [ 'sign-in.component.css' ]
})
export class SignIn {
  email: string = 'toto@gmail.com';
  password: string = 'totototo';
  passwordRepeat: string = 'totototo';
  message: string;

  constructor(private guardian: Guardian) {
  }

  private signIn() {
    this.message = '';
    
    if (this.email && this.password && this.passwordRepeat) {
      if (this.password === this.passwordRepeat) {
        this.guardian.signIn(this.email, this.password).subscribe(result => console.log(result));
      } else {
        this.message = 'Passwords must be identical.';
      }
    } else {
      this.message = 'All fields must be filled in.'
    }
  }
}