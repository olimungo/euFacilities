import { Component, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IRole } from '../../core/entities/role/role.interface';

const ROLE_ADMIN = 'ADMIN';

@Component({
  selector: 'roles',
  templateUrl: 'roles.component.html',
  styleUrls: [ 'roles.component.css' ]
})
export class Roles {
  isEditMode: boolean = false;
  roles: FirebaseListObservable<IRole[]>;
  currentRole: IRole = { code: '' };

  constructor(af: AngularFire) {
    this.roles = af.database.list('/roles', {
      query: {
        orderByChild: 'code'
      }
    });

    this.roles.subscribe((roles) => {
      if (!roles.some(role => role.code === ROLE_ADMIN)) {
        this.roles.push({ code: ROLE_ADMIN });
      }
    });
  }

  private edit(role: IRole) {
    this.currentRole.$key = role.$key;
    this.currentRole.code = role.code;

    this.isEditMode = true;
  }

  private add() {
    this.currentRole = { code: ''  };
    this.isEditMode = true;
  }

  private save() {
    if (this.currentRole.code) {
      if (!this.currentRole.$key) {
        this.roles.push(this.currentRole);
      } else {
        this.roles.update(this.currentRole.$key, { code: this.currentRole.code });
      }

      this.isEditMode = false;
    }
  }

  private cancel() {
    this.isEditMode = false;
  }
}