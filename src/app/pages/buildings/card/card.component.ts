import { Component, Input } from '@angular/core';
import { IBuilding } from '../../../core/entities/building/building.interface';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.css' ]
})
export class Card {
  @Input() building: IBuilding;
}