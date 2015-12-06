import {Route, Router} from 'angular2/router';
import {FindARoom} from './components/find-a-room';

export const APP_ROUTES = [
  { path: '/', redirectTo: '/find-a-room' },
  { path: '/find-a-room', component: FindARoom }
];
