import {Component, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {DesignService} from '../../services/DesignService';
import {ReservationService} from '../../services/ReservationService';

@Component({
  selector: 'overlay',
  directives: [NgIf],
  template: `
    <div class="overlay" *ng-if="isPanelActive" [class.active]="isActive">
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
        if (res) {
          this.isPanelActive = true;
          setTimeout(() => {
            this.isActive = true;
          }, 100);
        } else {
          this.isPanelActive = this.isActive = false;
        }
      });
  }
}
