import {Component, OnInit, Input, ElementRef, ViewEncapsulation} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: 'date-picker',
  inputs: ['formModel'],
  properties: ['controlName'],
  styleUrls: ['styles/filter.css', 'styles/form/date-picker.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <i class="fa fa-calendar"></i>
    <input [attr.value]="formModel.value[controlName]" type="text">
  `
})

export class DatePicker implements OnInit {
  @Input() controlName: string;
  @Input() formModel: any;
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
      this.elementRef = elementRef;
  }

  ngOnInit() {
    let nativeElement = jQuery(this.elementRef.nativeElement);
    let dateInput = nativeElement.find('input');
    dateInput.datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: (date) => {
        jQuery('#' + this.controlName).val(date);
        this.formModel.value[this.controlName] = date;
        this.formModel.valueChanges.next(this.formModel.value);
      }
    });

  }
};
