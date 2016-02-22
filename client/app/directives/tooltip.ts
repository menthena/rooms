import {Directive, OnInit, ElementRef, Input, Injectable, ViewEncapsulation} from '@angular/core';
import {IFloorElement} from '../services/FloorElementsService';
import {IReservation} from '../services/ReservationService';

declare var jQuery: any;

@Directive({
  selector: '[tooltip]',
  properties: ['data', 'reservations']
})

@Injectable()
export class Tooltip implements OnInit {
  @Input() data: IFloorElement;
  @Input() reservations: Array<IReservation>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    jQuery('.room').tooltip({
      html: true,
      placement: 'bottom',
      delay: 50,
      title: ``
    });
  }
};
