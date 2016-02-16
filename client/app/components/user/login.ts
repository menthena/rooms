import {Component, Output, EventEmitter} from 'angular2/core';
import {FormBuilder, NgForm, Validators, Control} from 'angular2/common';
import {Router, RouterLink} from 'angular2/router';
import {EMAIL_REGEX} from '../../constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserValidators} from '../../validators/UserValidators';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';

@Component({
  selector: 'login',
  directives: [NgForm, LoadingIndicator, RouterLink],
  styleUrls: ['styles/common/generic-form.css'],
  template: `
  <div [ngClass]="{'animated slideInRight': isIonic, 'generic-form': true}">
    <form [ngFormModel]="loginForm" (ngSubmit)="submitLoginForm($event)" novalidate>
      <fieldset>
        <legend>Login</legend>
        <div class="white-bg">
          <div class="server-err" [class.active]="invalidCredentials">
            <i class="fa fa-exclamation-circle"></i> Invalid email or password
          </div>
          <div class="input-group">
            <label for="email">
              Email
            </label>
            <input type="email" placeholder="Please enter your email" name="email" id="email"
              ngControl="email">
            <div [class.active]="(submitted || loginForm.controls.email.touched) && !loginForm.controls.email.valid" class="err">
              <div *ngIf="loginForm.controls.email.errors && loginForm.controls.email.errors.required">
                <i class="fa fa-exclamation-circle"></i> Please enter your email
              </div>
              <div *ngIf="loginForm.controls.email.errors && loginForm.controls.email.errors.invalid">
                <i class="fa fa-exclamation-circle"></i> Please enter a valid email
              </div>
            </div>

          </div>
          <div class="input-group">
            <label for="password">
              Password
            </label>
            <input type="password" placeholder="Please enter your password" name="password"
              id="password" ngControl="password">
            <div [class.active]="(submitted || loginForm.controls.password.touched) && !loginForm.controls.password.valid" class="err">
                <i class="fa fa-exclamation-circle"></i> Please enter your password
            </div>
          </div>
          <div class="buttons">
            <button class="btn" [class.submitting]="submitting">
              <span>Log in</span>
            </button>
          </div>
          <div class="sub-form">
            You forgot your password? It is okay, we all have been there. <a [routerLink]="['/RecoverPassword']">Recover password</a>.
            <div>
              OR you can <a [routerLink]="['/Register']">register</a>.
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `
})

export class Login {
  loginForm;
  submitted: boolean;
  invalidCredentials: boolean;
  isIonic: boolean;
  submitting: boolean;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService,
    private UserValidators: UserValidators, private AppService: AppService) {
    this.isIonic = this.AppService.isIonic;
    this.loginForm = this.fb.group({
      email: ['', this.UserValidators.EmailValidator],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    let login = this.loginForm.value;
    this.submitted = true;
    if (this.loginForm.valid) {
      this.submitting = true;
      this.invalidCredentials = false;

      this.UserService.login(login.email, login.password)
        .add((res) => {
          setTimeout(() => {
            this.submitting = false;
            if (!this.UserService.isLogged) {
              this.invalidCredentials = true;
            } else {
              this.router.navigate(['Reserve']);
            }
          }, 250);
        });
    }
  }

}
