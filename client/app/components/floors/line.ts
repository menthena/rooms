import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {FloorElementsService} from '../../services/FloorElementsService';
import {Resizable} from '../../directives/resizable';
import {DesignService} from '../../services/DesignService';
import {EditElement} from '../design/edit-element';
import {Draggable} from '../../directives/draggable';

declare var jQuery:any;

@Component({
  selector: 'line',
  styleUrls: ['styles/floors/line.css', 'styles/common/controls.css'],
  template: `
    <div class="wrapper control" resizable-element draggable-element
      [containment]="'#floor' + data.floorID" [data]="data" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID">
      <div class="line" [class.vertical]="data.elementVertical">
        <a (click)="rotate()" class="rotate-icon" *ngIf="designMode">
          <i class="fa" [class.fa-repeat]="!data.elementVertical" [class.fa-undo]="data.elementVertical"></i>
        </a>
      </div>
      <div class="hover-controls" *ngIf="designMode">
        <a (click)="destroy()"><i class="fa fa-trash"></i></a>
      </div>
    </div>
  `
})

export class Line {
  @Input() data;
  designObservable;
  designMode;

  constructor(DesignService: DesignService, private FloorElementsService: FloorElementsService) {
    this.designMode = DesignService.designModeState;
    this.designObservable = DesignService.getObservable();
  }

  rotate() {
    let width = this.data.elementWidth;
    let height = this.data.elementHeight;
    console.log(this.data.elementVertical);
    if (!this.data.elementVertical) {
      width = 3;
      height = 45;
    } else {
      width = 10;
      height = 3;
    }
    this.FloorElementsService.editElement(this.data.elementID, {
      floorID: this.data.floorID,
      elementWidth: width,
      elementHeight: height,
      elementVertical: !this.data.elementVertical
    });
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
