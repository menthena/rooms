import {Directive, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';

declare var jQuery: any;

@Directive({
  selector: '[place-element]',
  properties: ['data', 'type']
})

@Injectable()
export class PlaceElement implements OnInit {
  @Input() data;
  @Input() type;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    let wrapper = jQuery(nativeElement).find('.wrapper');
    let left = this.data.elementPositionX + '%';
    let placement: any = {
      width: this.data.elementWidth + '%',
      top: this.data.elementPositionY + '%'
    };
    if (this.data.elementHeight > 0) {
      placement.height = this.data.elementHeight + 'px';
    } else {
      placement.height = '55px';
    }
    if (this.data.elementPositionX > 80 && this.type === 'modal') {
      placement.right = '155px';
    } else {
      placement.left = left;
    }

    jQuery(wrapper).css(placement);
  }
};
