import {Route, Router} from 'angular2/router';
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

export const APP_ROUTES = [
  { path: '/', redirectTo: ['/MarketingIndex'] },
  { path: '/index', component: MarketingIndex, as: 'MarketingIndex' },
  { path: '/reserve', component: Reserve, as: 'Reserve' },
  { path: '/design', component: Design, as: 'Design' },
  { path: '/register', component: Register, as: 'Register' },
  { path: '/recover-password', component: RecoverPassword, as: 'RecoverPassword' },
  { path: '/reset-password/:id', component: ResetPassword, as: 'ResetPassword' },
  { path: '/change-password', component: ChangePassword, as: 'ChangePassword' },
  { path: '/login', component: Login, as: 'Login' },
  { path: '/reservations', component: Reservations, as: 'Reservations' },
  { path: '/register-success', component: RegisterSuccess, as: 'RegisterSuccess' },
  { path: '/accounts', component: Accounts, as: 'Accounts' }
];