import {Component, NgIf, Input, OnInit, ElementRef, Observable} from 'angular2/angular2';
import {Resizable} from '../../directives/resizable';
import {Draggable} from '../../directives/draggable';

declare var jQuery:any;

@Component({
  selector: 'placeholder',
  directives: [NgIf, Resizable, Draggable],
  inputs: ['data'],
  styleUrls: ['styles/floors/placeholder.css'],
  template: `
    <div class="wrapper" resizable-element draggable-element
      [containment]="'#floor' + data.floorID" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID">
      <div class="placeholder">
        <div><span>{{ data.elementName }}</span></div>
      </div>
    </div>
  `
})

export class Placeholder {
  @Input() data;
}
