import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'facilities-view-mode',
  templateUrl: 'facilities-view-mode.component.html',
  styleUrls: [ 'facilities-view-mode.component.css' ]
})
export class FacilitiesViewMode {
  @Input() mode: string = 'BUILDING';
  @Output() modeChanged: EventEmitter<string> = new EventEmitter<string>();

  setViewMode(mode: string) {
    if (this.mode !== mode) {
      this.mode = mode;
      this.modeChanged.emit(this.mode);
    }
  }
}