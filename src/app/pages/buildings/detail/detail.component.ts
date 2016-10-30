import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IBuilding } from '../../../core/entities/building/building.interface';

@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styleUrls: [ 'detail.component.css' ]
})
export class Detail {
  @Input() building: IBuilding;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  private closeClicked() {
    this.close.emit();
  }
}