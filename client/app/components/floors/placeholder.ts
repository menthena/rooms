import {Component, Input, OnInit, ElementRef} from 'angular2/core';
import {Observable} from 'rxjs';
import {Resizable} from '../../directives/resizable';
import {DesignService} from '../../services/DesignService';
import {FloorElementsService} from '../../services/FloorElementsService';
import {EditElement} from '../design/edit-element';
import {Draggable} from '../../directives/draggable';

declare var jQuery:any;

@Component({
  selector: 'placeholder',
  directives: [ Resizable, Draggable, EditElement],
  inputs: ['data'],
  styleUrls: ['styles/floors/placeholder.css', 'styles/common/controls.css'],
  template: `
    <div class="wrapper control" resizable-element draggable-element
      [containment]="'#floor' + data.floorID" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID">
      <edit-element *ngIf="designMode" place-element place-type="modal" [data]="data"></edit-element>
      <div class="placeholder">
        <div><span>{{ data.elementName }}</span></div>
        <div *ngIf="designMode" >
          <a (click)="editElement()"><i class="fa fa-pencil"></i></a>
          <a (click)="destroy()"><i class="fa fa-trash"></i></a>
        </div>
      </div>
    </div>
  `
})

export class Placeholder {
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

  editElement() {
    this.designObservable
      .subscription
      .next({
        type: 'edit',
        data: this.data.elementID
      });
  }
}
