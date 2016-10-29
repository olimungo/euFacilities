import { Component, Input } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IBuilding } from '../../core/entities/building/building.interface';

const USERS_COUNT = 15;

@Component({
  selector: 'buildings',
  templateUrl: 'buildings.component.html',
  styleUrls: [ 'buildings.component.css' ]
})
export class Buildings {
  isDetailMode: boolean = false;
  buildings: IBuilding[];
  currentBuilding: IBuilding = {};
  canChangeRole: boolean = false;

  viewMode = 'MAP';

  filter: string;

  constructor(private af: AngularFire) {
    af.database.list('/buildings', {
      query: {
        orderByChild: 'name'
      }
    }).subscribe(result => {
      this.buildings = result.map(fbBuilding => {
        return {
          $key: fbBuilding.$key,
          name: fbBuilding.name,
          code: fbBuilding.code,
          buildingAddress: fbBuilding.buildingAddress,
          type: fbBuilding.type
        }
      });
    });
  }

  private modeChanged(mode: string) {
    this.viewMode = mode;
  }

  private details(user: IBuilding) {
    this.currentBuilding.buildingAddress = user.buildingAddress;

    this.isDetailMode = true;
  }

  private close() {
    this.isDetailMode = false;
  }
}