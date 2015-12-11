import {Route, Router} from 'angular2/router';
import {Reserve} from './components/reservation/reservation';
import {Design} from './components/design/design';

export const APP_ROUTES = [
  { path: '/', redirectTo: ['/Reserve'] },
  { path: '/reserve', component: Reserve, as: 'Reserve' },
  { path: '/design', component: Design, as: 'Design' }
];
