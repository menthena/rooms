import {Route, Router} from 'angular2/router';
import {Reserve} from './components/reservation/reservation';
import {Design} from './components/design/design';
import {Login} from './components/user/login';
import {RecoverPassword} from './components/user/recover-password';
import {ResetPassword} from './components/user/reset-password';
import {Register} from './components/user/register';

export const APP_ROUTES = [
  { path: '/', redirectTo: ['/Reserve'] },
  { path: '/reserve', component: Reserve, as: 'Reserve' },
  { path: '/design', component: Design, as: 'Design' },
  { path: '/register', component: Register, as: 'Register' },
  { path: '/recover-password', component: RecoverPassword, as: 'RecoverPassword' },
  { path: '/reset-password/:id', component: ResetPassword, as: 'ResetPassword' },
  { path: '/login', component: Login, as: 'Login' }
];
