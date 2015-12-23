import {Component, Input, OnInit, ElementRef} from 'angular2/core';
import {Observable} from 'rxjs';
import {Resizable} from '../../directives/resizable';
import {DesignService} from '../../services/DesignService';
import {EditElement} from '../design/edit-element';
import {Draggable} from '../../directives/draggable';

declare var jQuery:any;

@Component({
  selector: 'placeholder',
  directives: [ Resizable, Draggable, EditElement],
  inputs: ['data'],
  styleUrls: ['styles/floors/placeholder.css'],
  template: `
    <div class="wrapper" resizable-element draggable-element
      [containment]="'#floor' + data.floorID" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID">
      <edit-element *ngIf="designMode" place-element place-type="modal" [data]="data"></edit-element>
      <div class="placeholder">
        <div><span>{{ data.elementName }}</span></div>
        <a *ngIf="designMode" (click)="editElement()"><i class="fa fa-pencil"></i></a>
      </div>
    </div>
  `
})

export class Placeholder {
  @Input() data;
  designObservable;
  designMode;

  constructor(DesignService: DesignService) {
    this.designMode = DesignService.designModeState;
    this.designObservable = DesignService.getObservable();
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
