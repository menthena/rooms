import {Route, Router} from 'angular2/router';
import {Reserve} from './components/reserve';
import {Design} from './components/design/design';

export const APP_ROUTES = [
  // { path: '/', redirectTo: '/reserve' },
  { path: '/reserve', component: Reserve, as: 'Reserve' },
  { path: '/design', component: Design, as: 'Design' }
];
