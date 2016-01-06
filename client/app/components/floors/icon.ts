import {Component, Input, OnInit, ElementRef} from 'angular2/core';
import {Observable} from 'rxjs';
import {Resizable} from '../../directives/resizable';
import {DesignService} from '../../services/DesignService';
import {EditElement} from '../design/edit-element';
import {Draggable} from '../../directives/draggable';

declare var jQuery:any;

@Component({
  selector: 'icon',
  directives: [Draggable],
  inputs: ['data'],
  styleUrls: ['styles/floors/icon.css'],
  template: `
    <div class="wrapper" draggable-element
      [attr.element-id]="data.elementID" [attr.data-id]="data.floorID">
      <div [ngClass]="addIconClass()">
      </div>
    </div>
  `
})

export class Icon {
  @Input() data;
  designObservable;
  designMode;

  constructor(DesignService: DesignService) {
    this.designMode = DesignService.designModeState;
    this.designObservable = DesignService.getObservable();
  }

  addIconClass() {
    return 'icon ' + this.data.elementType;
  }
}
