import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IBuilding } from '../../../core/entities/building/building.interface';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: [ 'list.component.css' ]
})
export class List {
  @Input() buildings: IBuilding;
  @Output() selectBuilding: EventEmitter<IBuilding> = new EventEmitter<IBuilding>();

  select(building: IBuilding) {
    this.selectBuilding.emit(building);
  }
}