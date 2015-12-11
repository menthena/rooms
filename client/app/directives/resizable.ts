import {Directive, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';
import {DesignService} from '../services/DesignService';
import {IFloorElement, FloorElementsService} from '../services/FloorElementsService';
import {Observable} from 'rxjs';

declare var jQuery: any;

@Directive({
  selector: '[resizable-element]'
})

@Injectable()
export class Resizable implements OnInit {
  observable;
  constructor(private elementRef: ElementRef, private DesignService: DesignService, private FloorElementsService: FloorElementsService) {
  }


  edit(elementID, data) {
    this.FloorElementsService.editElement(elementID, data);
  }

  ngOnInit() {
    let designMode = this.DesignService.designModeState;
    let nativeElement = this.elementRef.nativeElement;
    let intervalID;
    if (designMode) {
      jQuery(nativeElement)
        .resizable({
          minHeight: 55,
          minWidth: 50,
          maxWidth: 400,
          maxHeight: 300,
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
