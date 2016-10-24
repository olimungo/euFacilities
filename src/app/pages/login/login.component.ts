import { Component, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})
export class Login {
  constructor(private af: AngularFire) {
    //af.auth.createUser({ email: 'toto@gmail.com', password: 'totototo' });
  }

  private login() {
    console.log('log in');
    
    this.af.auth.login(
      { email: 'olivier@mungo.eu', password: 'totototo' },
      { provider: AuthProviders.Password, method: AuthMethods.Password }
    ).catch(error => console.log(error));
  }
}