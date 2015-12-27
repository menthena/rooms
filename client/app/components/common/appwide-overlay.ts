import {Component} from 'angular2/core';
import {Observable} from 'rxjs';
import {RouterLink} from 'angular2/router';
import {AppService} from '../../services/AppService';

@Component({
  selector: 'appwide-overlay',
  template: `
    <div class="appwide-overlay" *ngIf="isPanelActive" [class.active]="isActive">
      <a (click)="hide()">
        Hide
        <div>
          {{ message }}
        </div>
        <div *ngIf="panelType === 'confirmation'">
          <a (click)="confirm(true)">Yes</a>
          <a (click)="confirm(false)">No</a>
        </div>
      </a>
    <div>
  `,
  styleUrls: ['styles/common/appwide-overlay.css']
})

export class AppwideOverlay {
  observable;
  isActive: boolean;
  isPanelActive: boolean;
  panelType: string;
  message: string;
  id: string;

  constructor(private AppService: AppService) {
    this.observable = this.AppService.overlayObservable;
  }

  ngOnInit() {
    this.observable
      .connect();
    this.observable
      .subscribe(res => {
        if (res.type === 'show') {
          this.isPanelActive = true;
          this.panelType = res.panelType;
          this.message = res.message;
          this.id = res.id;
          setTimeout(() => {
            this.isActive = true;
          }, 100);
        }
      });
  }

  confirm(confirmation: boolean) {
    if (confirmation) {
      this.observable
        .subscription
        .next({
          type: 'response',
          data: true,
          id: this.id
        });
    }
    this.hide();
  }

  hide() {
    this.isActive = false;
    setTimeout(() => {
      this.isPanelActive = false;
    }, 100);
  }

}
