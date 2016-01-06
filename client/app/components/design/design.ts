import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {Router} from 'angular2/router';
import {DesignTools} from './design-tools';
import {Floors} from '../floors/floors';
import {DesignService} from '../../services/DesignService';
import {UserService} from '../../services/UserService';

@Component({
  directives: [DesignTools, Floors],
  encapsulation: ViewEncapsulation.None,
  selector: 'design',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <design-tools></design-tools>
        </div>
        <div class="col-sm-9">
          <floors></floors>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['styles/design/design.css']
})

export class Design {
  constructor(private DesignService: DesignService,
    private UserService: UserService, private router: Router
  ) {
    this.DesignService.designModeState = true;
    if (!this.UserService.isLogged) {
      this.router.navigate(['Login']);
    }
  }
}
