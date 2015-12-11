import {Directive, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';
import {DesignService} from '../services/DesignService';
import {IFloorElement, FloorElementsService} from '../services/FloorElementsService';

declare var jQuery: any;

@Directive({
  selector: '[droppable-element]'
})

@Injectable()
export class Droppable implements OnInit {
  designObservable;
  floorElementsObservable;

  constructor(private elementRef: ElementRef, private DesignService: DesignService, private FloorElementsService: FloorElementsService) {
    this.designObservable = DesignService.getObservable();
    this.floorElementsObservable = FloorElementsService.getObservable();
  }

  edit(elementID, data) {
    this.FloorElementsService.editElement(elementID, data);
  }

  addNew(data) {
    this.FloorElementsService.addElement(data);
  }

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    this.designObservable.connect();

    jQuery(nativeElement).droppable({
      activeClass: 'active-droppable',
      hoverClass: 'active-dropping',
      drop: (e, dropped) => {
        let elementID = dropped.draggable.attr('element-id');
        let position = this.DesignService.getPosition(e, dropped);
        let floorID = jQuery(e.target).data('id');
        if (elementID) {
          this.edit(elementID, {
            floorID: floorID,
            elementPositionX: position.x,
            elementPositionY: position.y
          });
        } else {
          let type = dropped.helper.data('type');
          this.addNew({
            floorID: floorID,
            elementName: 'Untitled',
            elementType: type,
            elementPositionX: position.x,
            elementPositionY: position.y,
            elementHeight: 0,
            elementWidth: 19
          });
        }
      }
    });
  }
};
