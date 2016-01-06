import {Component, OnInit, ElementRef, ViewEncapsulation} from 'angular2/core';
import {Draggable} from '../../directives/draggable';
import {Scrollable} from '../../directives/scrollable';


@Component({
  directives: [Draggable, Scrollable],
  selector: 'design-tools',
  template: `
  <div class="wrapper">
    <div class="design-tools" scrollable-element>

      <ul class="list-inline">
        <li>
          <h1>Design Tools</h1>
        </li>
        <li class="room">
          <a draggable-element clone="true" data-type="room">
            Drag a room
          </a>
        </li>

        <li class="placeholder">
          <a draggable-element clone="true" data-type="placeholder">
            Drag a placeholder
          </a>
        </li>

        <li class="line">
          <a draggable-element clone="true" data-type="line">
            Drag a line
            <div class="bar"></div>
          </a>
        </li>

        <li class="icons">
          <a draggable-element clone="true" data-type="icon-kitchen" class="icon icon-kitchen"></a>
          <a draggable-element clone="true" data-type="icon-wc" class="icon icon-wc"></a>
          <a draggable-element clone="true" data-type="icon-elevator" class="icon icon-elevator"></a>
          <a draggable-element clone="true" data-type="icon-exit" class="icon icon-exit"></a>
          <a draggable-element clone="true" data-type="icon-stairs" class="icon icon-stairs"></a>
        </li>
      </ul>
    </div>
  </div>
  `,
  styleUrls: ['styles/design/design-tools.css']
})

export class DesignTools {

}
