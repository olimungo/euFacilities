import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IBuilding } from '../../../core/entities/building/building.interface';

@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styleUrls: [ 'detail.component.css' ]
})
export class Detail {
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

  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  private facilitiesViewMode: string = 'BUILDING';

  private _building: IBuilding;
  private startTime: string = '';
  private endTime: string = '';
  private occupants: string[];

  private closeClicked() {
    this.close.emit();
  }

  private modeChanged(mode: string) {
    this.facilitiesViewMode = mode;
  }
}