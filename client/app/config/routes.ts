import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Reserve} from '../components/reservation/reservation';
import {Design} from '../components/design/design';
import {Reservations} from '../components/reservations/reservations';
import {Login} from '../components/user/login';
import {MarketingIndex} from '../components/marketing/index';
import {RecoverPassword} from '../components/user/recover-password';
import {ResetPassword} from '../components/user/reset-password';
import {ChangePassword} from '../components/user/change-password';
import {Register} from '../components/user/register';
import {RegisterSuccess} from '../components/user/register-success';
import {Accounts} from '../components/accounts/accounts';

export const APP_ROUTES : Routes = [
  { path: 'index', component: MarketingIndex },
  { path: 'reserve', component: Reserve },
  { path: 'design', component: Design },
  { path: 'register', component: Register },
  { path: 'register/:id', component: Register },
  { path: 'recover-password', component: RecoverPassword },
  { path: 'reset-password/:id', component: ResetPassword },
  { path: 'change-password', component: ChangePassword },
  { path: 'login', component: Login },
  { path: 'reservations', component: Reservations },
  { path: 'register-success', component: RegisterSuccess },
  { path: 'accounts', component: Accounts },
  { path: '**', redirectTo: '/index' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
