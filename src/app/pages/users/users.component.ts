import { Component, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IUser } from '../../core/entities/user/user.interface';

declare const faker: any;
const USERS_COUNT = 15;

@Component({
  selector: 'users',
  templateUrl: 'users.component.html',
  styleUrls: [ 'users.component.css' ]
})
export class Users {
  isEditMode: boolean = false;
  users: FirebaseListObservable<IUser[]>;
  currentUser: IUser = { firstName: '', lastName: '' };

  constructor(af: AngularFire) {
    this.users = af.database.list('/users', {
      query: {
        orderByChild: 'lastName'
      }
    });
    
    /*
    for (var count=0; count < USERS_COUNT; count++) {
      var user: IUser = { firstName: faker.name.firstName(), lastName: faker.name.lastName() };
      this.users.push(user);
    }
    */
  }

  private edit(user: IUser) {
    this.currentUser.$key = user.$key;
    this.currentUser.firstName = user.firstName;
    this.currentUser.lastName = user.lastName;

    this.isEditMode = true;
  }

  private add() {
    this.currentUser = { firstName: '', lastName: '' };
    this.isEditMode = true;
  }

  private save() {
    if (this.currentUser.firstName && this.currentUser.lastName) {
      if (!this.currentUser.$key) {
        this.users.push(this.currentUser);
      } else {
        this.users.update(this.currentUser.$key, { firstName: this.currentUser.firstName, lastName: this.currentUser.lastName });
      }

      this.isEditMode = false;
    }
  }

  private cancel() {
    this.isEditMode = false;
  }
}