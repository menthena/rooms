import {Injectable, Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {RouterLink} from '@angular/router';
import {AppService} from '../../services/AppService';

@Component({
  selector: 'appwide-overlay',
  inputs: ['is-panel-active'],
  template: `
    <div class="appwide-overlay" *ngIf="isPanelActive" [class.active]="isActive">
      <a (click)="hide()" class="pull-right hide-button">
        <i class="fa fa-times"></i>
      </a>
      <div class="box text-center">
        <div class="inner">
          <div>
            {{ message }}
          </div>
          <div *ngIf="panelType === 'confirmation'" class="buttons">
            <a (click)="confirm(true)" class="yes">Yes</a>
            <a (click)="confirm(false)">No</a>
          </div>
        </div>
      </div>
    <div>
  `,
  styleUrls: ['styles/common/appwide-overlay.css']
})

@Injectable()
export class AppwideOverlay {
  observable;
  isActive: boolean;
  @Input() isPanelActive: boolean = false;
  panelType: string;
  message: string;
  id: string;

  constructor(private AppService: AppService) {
    this.observable = this.AppService.overlayObservable;
  }

  ngOnInit() {
    if (this.observable) {
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
