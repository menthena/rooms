import { NgModule, Component }      from '@angular/core';
import {Overlay} from '../components/common/overlay';
import {AppwideOverlay} from '../components/common/appwide-overlay';

@Component({
  selector: 'rooms',
  template: `
  <appwide-overlay></appwide-overlay>
  <overlay></overlay>
  <header [logged]="isLogged"></header>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {}
