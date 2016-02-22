import {Component, provide, Directive} from '@angular/core';
import {UserService} from 'services/UserService';
import {CalendarService} from 'services/CalendarService';
import {ReservationService} from 'services/ReservationService';
import {FloorElementsService} from 'services/FloorElementsService';
import {DesignService} from 'services/DesignService';
import {AppService} from 'services/AppService';
import {FloorService} from 'services/FloorService';
import {Router, RootRouter, Location, RouterLink,
  ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy,
  APP_BASE_HREF, ROUTER_PROVIDERS, MockLocation} from '@angular/router';
import {MockLocationStrategy} from 'angular2/router/testing';
import {Form} from 'angular2/form';
import {Platform} from 'ionic-framework/ionic';

import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {BaseRequestOptions, Response, ResponseOptions, Http} from '@angular/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

export const MOCK_PROVIDERS = [
    provide(Platform, {useClass: MockPlatform}),
    AppService,
    CalendarService,
    UserService,
    BaseRequestOptions,
    ROUTER_PROVIDERS,
    ROUTER_BINDINGS,
    FloorService,
    ReservationService,
    FloorElementsService,
    DesignService,
    provide(Location, {useClass: MockLocationStrategy}),
    provide(APP_BASE_HREF, {useValue: '/'}),
    MockBackend,
    provide(Router, {useClass: RootRouter}),
    provide(LocationStrategy, {useClass: MockLocationStrategy}),
    provide(Http, {
      useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ];

class MockPlatform {
  is() {
    return true;
  }
}
