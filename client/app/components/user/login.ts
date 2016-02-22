import {Component, Output, EventEmitter, Optional} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {EMAIL_REGEX} from '../../config/constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserValidators} from '../../validators/UserValidators';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';
import {RegisterPage} from './register-page';
import {RecoverPasswordPage} from './recover-password-page';

@Component({
  selector: 'login',
  styleUrls: ['styles/common/generic-form.css'],
  template: `
    <div class="generic-form">
      <form #loginForm="ngForm" (ngSubmit)="submitLoginForm($event)" novalidate>
        <fieldset>
          <legend *ngIf="!isIonic">Login</legend>
          <div class="white-bg">
            <div class="server-err" [class.active]="invalidCredentials">
              <i class="fa fa-exclamation-circle"></i> Invalid email or password
            </div>
            <div class="input-group">
              <label for="email">
                Email
              </label>
              <input type="email" placeholder="Please enter your email" name="email" id="email"
                [(ngModel)]="login.email"
                #email="ngModel">
              <div [class.active]="(submitted || email.touched) && !email.valid" class="err">
                <div *ngIf="email.errors && email.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your email
                </div>
                <div *ngIf="email.errors && email.errors.invalid">
                  <i class="fa fa-exclamation-circle"></i> Please enter a valid email
                </div>
              </div>

            </div>
            <div class="input-group">
              <label for="password">
                Password
              </label>
              <input type="password" placeholder="Please enter your password" name="password"
                id="password" [(ngModel)]="login.password"
                #password="ngModel">
              <div [class.active]="(submitted || password.touched) && !password.valid" class="err">
                  <i class="fa fa-exclamation-circle"></i> Please enter your password
              </div>
            </div>
            <div class="buttons">
              <button class="btn" [class.submitting]="submitting && !isIonic"
                [class.submitting-ionic]="submitting && isIonic">
                <span>Log in</span>
              </button>
            </div>
            <div class="sub-form">
              You forgot your password? It is okay, we all have been there. <a (click)="goToRecoverPassword()">Recover password</a>.
              <div>
                OR you can <a (click)="goToLogin()">register</a>.
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
  login: any = {};
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

  goToLogin() {
    this.router.navigate(['Register']);
  }

  goToRecoverPassword() {
    this.router.navigate(['RecoverPassword']);
  }

  submitLoginForm() {
    let login = this.login;
    this.submitted = true;
    this.submitting = true;
    this.invalidCredentials = false;

    this.UserService.login(login.email, login.password)
      .add((res) => {
        setTimeout(() => {
          this.submitting = false;
          if (!this.UserService.isLogged) {
            this.invalidCredentials = true;
          } else {
            this.router.navigate(['reserve']);
          }
        }, 250);
      });
  }

}
