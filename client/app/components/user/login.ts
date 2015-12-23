import {Component} from 'angular2/core';
import {FormBuilder, NgForm, Validators, Control} from 'angular2/common';
import {EMAIL_REGEX} from '../../constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'login',
  directives: [NgForm, LoadingIndicator],
  styleUrls: ['styles/common/generic-form.css'],
  template: `
  <div class="generic-form">
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
            <input type="email" placeholder="Please enter you email" name="email" id="email"
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
              Password <span class="additional"><a>Forgot?</a></span>
            </label>
            <input type="password" placeholder="Please enter you password" name="password"
              id="password" ngControl="password">
            <div [class.active]="(submitted || loginForm.controls.password.touched) && !loginForm.controls.password.valid" class="err">
                <i class="fa fa-exclamation-circle"></i> Please enter password
            </div>
          </div>
          <button class="btn" [class.submitting]="submitting">
            <span>Log in</span>
          </button>
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
  submitting: boolean;

  constructor(private fb: FormBuilder, private UserService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', (control: any): Object => {
        if (!control.value) {
          return {
            required: true
          };
        } else if (control.value) {
          if (!new RegExp(EMAIL_REGEX).test(control.value)) {
            return {
              invalid: true
            };
          }
        }
        return {};
      }],
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
          this.submitting = false;
          if (!this.UserService.isLogged) {
            this.invalidCredentials = true;
          } else {
            console.log('tick');
          }
        });
    }
  }

}
