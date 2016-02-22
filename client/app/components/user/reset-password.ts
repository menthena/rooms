import {Component} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserValidators} from '../../validators/UserValidators';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'reset-password',
  styleUrls: ['styles/common/generic-form.css'],
  template: `
  <div class="generic-form">
    <form resetPasswordForm="ngForm" (ngSubmit)="submitLoginForm($event)" novalidate>
      <fieldset>
        <legend>Reset password</legend>
        <div class="white-bg">
          <div *ngIf="success" class="success row">
            <div class="col-xs-1">
              <i class="fa fa-check"></i>
            </div>
            <div class="col-xs-10 success-message">
              Successfully changed your password. Click <a [routerLink]="['/Login']">here</a>
              to login.
            </div>
          </div>
          <div *ngIf="!success">
            <div class="server-err" [class.active]="error">
              <i class="fa fa-exclamation-circle"></i> {{ error }}
            </div>
            <div class="input-group">
              <label for="email">
                Email
              </label>
              <input type="email" placeholder="Please enter your email" name="email" id="email"
                ngControl="email">
              <div [class.active]="(submitted || resetPasswordForm.controls.email.touched)
                && !resetPasswordForm.controls.email.valid" class="err">
                <div *ngIf="resetPasswordForm.controls.email.errors && resetPasswordForm.controls.email.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your email
                </div>
                <div *ngIf="resetPasswordForm.controls.email.errors && resetPasswordForm.controls.email.errors.invalid">
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
              <div [class.active]="(submitted || resetPasswordForm.controls.password.touched)
                && !resetPasswordForm.controls.password.valid" class="err">
                <div *ngIf="resetPasswordForm.controls.password.errors && resetPasswordForm.controls.password.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your password
                </div>
                <div *ngIf="resetPasswordForm.controls.password.errors && resetPasswordForm.controls.password.errors.minimum">
                  <i class="fa fa-exclamation-circle"></i> Your password must have at least 6 characters
                </div>
              </div>
            </div>
            <div class="buttons">
              <button class="btn" [class.submitting]="submitting">
                <span>Reset password</span>
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `
})

export class ResetPassword {
  resetPasswordForm;
  submitted: boolean;
  invalidCredentials: boolean;
  submitting: boolean;
  error: string;
  success: boolean;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService,
    private UserValidators: UserValidators) {
    this.resetPasswordForm = this.fb.group({
      email: ['', this.UserValidators.EmailValidator],
      password: ['', this.UserValidators.PasswordValidator]
    });
  }

  submitLoginForm() {
    let resetPassword = this.resetPasswordForm.value;
    this.submitted = true;
    if (this.resetPasswordForm.valid) {
      this.submitting = true;
      this.invalidCredentials = false;
      this.UserService.resetPassword(resetPassword.email, resetPassword.password, this.router.params['id'])
        .subscribe((res) => {
          setTimeout(() => {
            this.submitting = false;
            this.success = true;
          }, 250);
        }, (err) => {
          setTimeout(() => {
            this.submitting = false;
            if (err.status === 404) {
              this.error = 'Invalid token or email address';
            } else {
              this.error = 'Server error occured';
            }
          }, 250);
        });
    }
  }

}
