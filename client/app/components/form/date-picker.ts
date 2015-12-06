import {Component, OnInit, ElementRef, ViewEncapsulation} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: 'date-picker',
  styleUrls: ['styles/filter.css', 'styles/form/date-picker.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <label for="date">Date</label>
    <i class="fa fa-calendar"></i>
    <input type="text" id="date">
  `
})

export class DatePicker implements OnInit {
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
      this.elementRef = elementRef;
  }

  onInit() {
    let nativeElement = jQuery(this.elementRef.nativeElement);
    let dateInput = nativeElement.find('input');
    dateInput.datepicker();
  }
};
