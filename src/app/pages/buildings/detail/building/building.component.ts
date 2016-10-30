import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IBuilding } from '../../../../core/entities/building/building.interface';

@Component({
  selector: 'building',
  templateUrl: 'building.component.html',
  styleUrls: [ 'building.component.css' ]
})
export class Building {
  @Input() set building(value: IBuilding) {
    this._building = value;

    if (this._building && this._building.buildingOpeningHoursList) {
      let list = this._building.buildingOpeningHoursList.openingHours;

      if (list.hasOwnProperty('length')) {
        this.startTime = list[0].startTime;
        this.endTime = list[0].endTime;
      } else {
        this.startTime = list.startTime;
        this.endTime = list.endTime;
      }
    }

    if (this._building && this._building.occupants) {
      this.occupants = this._building.occupants.split(',');
    } else {
      this.occupants = [];
    }
  }

  private _building: IBuilding;
  private startTime: string = '';
  private endTime: string = '';
  private occupants: string[];
}