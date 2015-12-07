import {Directive, OnInit, ElementRef, Input, Injectable, OnChanges} from 'angular2/angular2';
import {DesignService} from '../services/DesignService';

declare var jQuery: any;

@Directive({
  selector: '[draggable-element]',
  properties: ['clone', 'containment']
})

@Injectable()
export class Draggable implements OnInit {
  @Input() clone: boolean;
  @Input() containment: string;
  designMode;

  constructor(private elementRef: ElementRef, private DesignService: DesignService) {}

  ngOnInit() {
    let designMode = this.DesignService.designModeState;
    let nativeElement = this.elementRef.nativeElement;
    if (designMode) {
      let options = {};
      if (this.clone) {
        options = {
          opacity: 0.8,
          helper: 'clone'
        };
      } else if (this.containment) {
        options = {
          containment: this.containment,
          stack: 'div'
        };
      }
      jQuery(nativeElement).draggable(options);
    } else {
      if (jQuery(nativeElement).hasClass('ui-draggable') ) {
        jQuery(nativeElement).draggable('destroy');
      }
    }
  }
};
