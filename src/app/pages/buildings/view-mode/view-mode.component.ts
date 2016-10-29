import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-mode',
  templateUrl: 'view-mode.component.html',
  styleUrls: [ 'view-mode.component.css' ]
})
export class ViewMode {
  @Input() mode: string = 'MAP';
  @Output() modeChanged: EventEmitter<string> = new EventEmitter<string>();

  setViewMode(mode: string) {
    if (this.mode !== mode) {
      this.mode = mode;
      this.modeChanged.emit(this.mode);
    }
  }
}