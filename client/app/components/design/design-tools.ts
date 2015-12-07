import {Component, OnInit, ElementRef, ViewEncapsulation} from 'angular2/angular2';
import {Draggable} from '../../directives/draggable';


@Component({
  directives: [Draggable],
  selector: 'design-tools',
  template: `
  <div class="design-tools">
    <h1>Design Tools</h1>

    <div class="room">
      <a draggable-element clone="true">
        Drag a room
      </a>
    </div>

    <div class="placeholder">
      <a draggable-element clone="true">
        Drag a placeholder
      </a>
    </div>
  </div>
  `,
  styleUrls: ['styles/design/design-tools.css']
})

export class DesignTools {

}
