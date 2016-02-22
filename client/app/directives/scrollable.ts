import {Directive, OnInit, ElementRef, Input, Injectable, OnChanges} from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[scrollable-element]'
})

@Injectable()
export class Scrollable implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    let offsetTop = jQuery(nativeElement).offset().top;
    jQuery(window).scroll((e) => {
      let scrollTop = jQuery(window).scrollTop();
      if (scrollTop >= offsetTop) {
        jQuery(nativeElement).addClass('fixed');
      } else {
        jQuery(nativeElement).removeClass('fixed');
      }
    });
  }
};
