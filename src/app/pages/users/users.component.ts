import { Component, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IUser } from '../../core/entities/user/user.interface';
import { ERoles, IRole, Roles } from '../../core/entities/role/role.interface';

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
  roles = Roles;
  currentUser: IUser = { role: Roles[ERoles.ADMIN].code, email: '', firstName: '', lastName: '' };
  currentRoleLabel: string;
  canChangeRole: boolean = false;

  constructor(private af: AngularFire) {
    this.users = af.database.list('/users', {
      query: {
        orderByChild: 'email'
      }
    });
    
    /*
    for (var count=0; count < USERS_COUNT; count++) {
      var user: IUser = { email: faker.internet.email(), firstName: faker.name.firstName(), lastName: faker.name.lastName() };
      this.users.push(user);
    }
    */
  }

  private roleCodeToLabel(code: string): string {
    let label: string,
        roles: IRole[] = this.roles.filter(role => role.code === code);

    if (roles.length > 0) {
      label = roles[0].label;
    }

    return label;
  }

  private selectRole(role: IRole) {
    this.currentUser.role = role.code;
    this.currentRoleLabel = role.label;
  }

  private edit(user: IUser) {
    this.af.auth.subscribe(auth => this.canChangeRole = auth.uid !== user.$key);

    this.currentUser.$key = user.$key;
    this.currentUser.role = user.role;
    this.currentUser.email = user.email;
    this.currentUser.firstName = user.firstName;
    this.currentUser.lastName = user.lastName;
    this.currentRoleLabel = this.roleCodeToLabel(this.currentUser.role)

    this.isEditMode = true;
  }

  private add() {
    this.currentUser = { role: Roles[ERoles.ADMIN].code, email: '', firstName: '', lastName: '' };
    this.currentRoleLabel = this.roleCodeToLabel(this.currentUser.role);
    this.isEditMode = true;
  }

  private save() {
    if (this.currentUser.email) {
      if (!this.currentUser.$key) {
        this.users.push(this.currentUser);
      } else {
        this.users.update(this.currentUser.$key, {
          role: this.currentUser.role,
          email: this.currentUser.email
        });
      }

      this.isEditMode = false;
    }
  }

  private cancel() {
    this.isEditMode = false;
  }
}