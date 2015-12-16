import {Directive, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';

declare var jQuery: any;

@Directive({
  selector: '[place-element]',
  inputs: ['data'],
  properties: ['placeType']
})

@Injectable()
export class PlaceElement implements OnInit {
  @Input() data;
  @Input() placeType;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    let wrapper = jQuery(nativeElement).find('.wrapper').eq(0);
    let left = this.data.elementPositionX + '%';
    let placement: any = {};
    if (this.placeType === 'modal') {
      if (this.data.elementPositionX > 70) {
        // placement = {
        //   right: '120px'
        // };
      }
    } else {
      placement = {
        width: this.data.elementWidth + '%',
        top: this.data.elementPositionY + '%'
      };
      if (this.data.elementHeight > 0) {
        placement.height = this.data.elementHeight + 'px';
      } else {
        placement.height = '55px';
      }
      placement.left = left;
    }

    jQuery(wrapper).css(placement);
  }
};
