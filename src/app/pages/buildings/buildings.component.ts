import { Component, Input, SimpleChange } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IBuilding } from '../../core/entities/building/building.interface';

@Component({
  selector: 'buildings',
  templateUrl: 'buildings.component.html',
  styleUrls: [ 'buildings.component.css' ]
})
export class Buildings {
  buildings: IBuilding[] = [];
  currentBuilding: IBuilding;
  viewMode = 'LIST';
  isDetailVisible: boolean = false;

  private _buildings: IBuilding[];

  constructor(private af: AngularFire) {
    af.database.list('/buildings', {
      query: {
        orderByChild: 'name'
      }
    }).subscribe(result => {
      this._buildings = result.map(curBuilding => {
        return {
          $key: curBuilding.$key,
          name: curBuilding.name,
          code: curBuilding.code,
          buildingAddress: curBuilding.buildingAddress,
          type: curBuilding.type,
          gpsCoordinates: curBuilding.gpsCoordinates,
          occupants: curBuilding.occupants,
          buildingOpeningHoursList: curBuilding.buildingOpeningHoursList
        }
      }).filter((curBuilding: IBuilding) => curBuilding.name );

      this.buildings = this._buildings.map(building => building);

      console.log(result)
    });
  }

  private modeChanged(mode: string) {
    this.viewMode = mode;
  }

  private showDetail(building: IBuilding) {
    this.currentBuilding = building;
    this.isDetailVisible = true;

    console.log(this.currentBuilding)
  }

  private closeDetail() {
    this.isDetailVisible = false;
  }

  private doFilter(pattern: string) {
    this._buildings = this._buildings ? this._buildings : [];
    pattern = pattern ? pattern : '';

    let filtered =  this._buildings.filter(building => {
      return building.code.toUpperCase().indexOf(pattern.toUpperCase()) > -1;
    });

    this.buildings = pattern ? filtered : this._buildings;
  }
}