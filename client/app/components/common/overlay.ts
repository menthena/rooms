import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {DesignService} from '../../services/DesignService';
import {ReservationService} from '../../services/ReservationService';

@Component({
  selector: 'overlay',
  template: `
    <div class="overlay" *ngIf="isPanelActive" [class.active]="isActive">
    <div>
  `,
  styleUrls: ['styles/common/overlay.css']
})

export class Overlay {
  isActive: boolean;
  isPanelActive: boolean;
  reservationObservable: any;

  constructor(private ReservationService: ReservationService) {
    this.reservationObservable = this.ReservationService.getObservable();
  }

  ngOnInit() {
    this.reservationObservable
      .connect();
    this.reservationObservable
      .subscribe(res => {
        if (typeof res === 'string') {
          this.isPanelActive = true;
          setTimeout(() => {
            this.isActive = true;
          }, 100);
        } else {
          this.isActive = false;
          setTimeout(() => {
            this.isPanelActive = false;
          }, 100);
        }
      });
  }
}
