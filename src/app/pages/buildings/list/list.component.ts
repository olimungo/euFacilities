import { Component, Input } from '@angular/core';

import { IBuilding } from '../../../core/entities/building/building.interface';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: [ 'list.component.css' ]
})
export class List {
  @Input() buildings: IBuilding;
  @Input() filter: string;
}