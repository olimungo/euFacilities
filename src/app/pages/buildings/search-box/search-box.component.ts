import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: [ 'search-box.component.css' ]
})
export class SearchBox {
  @Input() filter: string;
  @Output() filterChange = new EventEmitter<string>();

  private keyUp(pattern: string) {
    this.filterChange.emit(pattern)
  }
}