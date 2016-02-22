import {Directive, OnInit, ElementRef, Input, Injectable} from '@angular/core';
import {DesignService} from '../services/DesignService';
import {IFloorElement, FloorElementsService} from '../services/FloorElementsService';
import {Observable} from 'rxjs/Rx';

declare var jQuery: any;

@Directive({
  selector: '[resizable-element]',
  inputs: ['data']
})

@Injectable()
export class Resizable implements OnInit {
  observable;
  @Input() data;

  constructor(private elementRef: ElementRef, private DesignService: DesignService, private FloorElementsService: FloorElementsService) {
  }

  edit(elementID, data) {
    this.FloorElementsService.editElement(elementID, data);
  }

  ngOnInit() {
    let designMode = this.DesignService.designModeState;
    let nativeElement = this.elementRef.nativeElement;
    let minHeight = 55;
    let maxHeight = 300;
    let minWidth = 50;
    let maxWidth = 400;
    let handles = 'n, e, s, w';
    let intervalID;
    if (this.data && this.data.elementType === 'line') {
      if (this.data.elementVertical) {
        minWidth = 3;
        maxWidth = 3;
        handles = 's, n';
      } else {
        minHeight = 3;
        maxHeight = 3;
        handles = 'e, w';
      }
    }
    if (designMode) {
      jQuery(nativeElement)
        .resizable({
          minHeight: minHeight,
          minWidth: minWidth,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          handles: handles,
          stop: (e, dropped) => {
            let elementID = dropped.element.attr('element-id');
            let dimension = this.DesignService.getDimension(e, dropped);
            let floorID = jQuery(e.target).data('id');
            if (elementID) {
              this.edit(elementID, {
                floorID: floorID,
                elementWidth: dimension.width,
                elementHeight: dimension.height
              });
            }
          }
        });
    } else {
      if (jQuery(nativeElement).hasClass('ui-resizable')) {
        jQuery(nativeElement).resizable('destroy');
      }
    }
  }
};
