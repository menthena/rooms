import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Resizable} from '../../directives/resizable';
import {DesignService} from '../../services/DesignService';
import {FloorElementsService} from '../../services/FloorElementsService';
import {EditElement} from '../design/edit-element';
import {Draggable} from '../../directives/draggable';

declare var jQuery:any;

@Component({
  selector: 'icon',
  styleUrls: ['styles/floors/icon.css', 'styles/common/controls.css'],
  template: `
    <div class="wrapper control" draggable-element
      [attr.element-id]="data.elementID" [attr.data-id]="data.floorID">
      <div [ngClass]="addIconClass()">
      </div>
      <div class="hover-controls" *ngIf="designMode">
        <a (click)="destroy()"><i class="fa fa-trash"></i></a>
      </div>
    </div>
  `
})

export class Icon {
  @Input() data;
  designObservable;
  designMode;

  constructor(DesignService: DesignService, private FloorElementsService: FloorElementsService) {
    this.designMode = DesignService.designModeState;
    this.designObservable = DesignService.getObservable();
  }

  destroy() {
    this.FloorElementsService
      .deleteElement(this.data.floorID, this.data.elementID);
  }

  addIconClass() {
    return 'icon ' + this.data.elementType;
  }
}
