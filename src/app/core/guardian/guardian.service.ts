import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { IGuardianResult } from './guardian.interface';
import { IUser } from '../entities/user/user.interface';
import { ERoles, Roles } from '../entities/role/role.interface';

@Injectable()
export class Guardian {
  constructor(private af: AngularFire) {
  }

  signIn(email: string, password: string): Observable<IGuardianResult> {
    console.log('guardian.signIn:' + email + ' / ' + password);

    return Observable.create((observer: any) => {
      if (email && password) {
        // Create the Firebase user for authentication
        this.af.auth.createUser({ email: email, password: password })
          .then(user => {
            this.af.database.list('/users').subscribe(
              result => {
                // Database is not yet protected, add the new user as ADMIN
                this.af.database.object('/users/' + user.uid).set({ role: Roles[ERoles.ADMIN].code, email: email });
                observer.next({ value: true, message: 'User created as ADMIN' });
                observer.complete();
              },
              error => {
                observer.next({ value: true, message: 'Logged' });
                observer.complete();
              }
            );
          })
          .catch(error => {
            observer.next({ value: false, message: error.message });
            observer.complete();
          });
      } else {
        observer.next({ value: false, message: 'Email and Password must not be empty.' });
        observer.complete();
      }
    });
  }

  logIn(email: string, password: string): Observable<IGuardianResult> {
    console.log('guardian.logIn:' + email + ' / ' + password);

    return Observable.create((observer: any) => {
      if (email && password) {
        this.af.auth.login(
          { email: email, password: password },
          { provider: AuthProviders.Password, method: AuthMethods.Password })
          .then(result => {
            observer.next({ value: true, message: 'Logged' });
            observer.complete();
          })            
          .catch(error => {
            observer.next({ value: false, message: error.message });
            observer.complete();
          });
      } else {
        observer.next({ value: false, message: 'Email and Password must not be empty.' });
        observer.complete();
      }
    });
  }
}