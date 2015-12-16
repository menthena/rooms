import {Component, OnInit, Input, ElementRef, ViewEncapsulation} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: 'time-picker',
  inputs: ['formModel'],
  properties: ['controlName'],
  styleUrls: ['styles/filter.css', 'styles/form/time-picker.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <input [attr.value]="formModel.value[controlName]" type="text" class="time-picker">
  `
})

export class TimePicker implements OnInit {
  @Input() controlName: string;
  @Input() formModel: any;
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
      this.elementRef = elementRef;
  }

  ngOnInit() {
    let nativeElement = jQuery(this.elementRef.nativeElement);
    let timeInput = nativeElement.find('input');
    timeInput.timepicker();
    timeInput.on('changeTime', (element) => {
      let time = jQuery(element.currentTarget).val();
      jQuery('#' + this.controlName).val(time);
      this.formModel.value[this.controlName] = time;
      this.formModel.valueChanges.next(this.formModel.value);
    });
  }
};
