import {Component} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserValidators} from '../../validators/UserValidators';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'change-password',
  styleUrls: ['styles/common/generic-form.css'],
  template: `
  <div class="generic-form">
    <form #changePasswordForm="ngForm" (ngSubmit)="submitForm($event)" novalidate>
      <fieldset>
        <legend>Change password</legend>
        <div class="white-bg">
          <div *ngIf="success" class="success row">
            <div class="col-xs-1">
              <i class="fa fa-check"></i>
            </div>
            <div class="col-xs-10 success-message">
              Successfully changed your password. Click <a [routerLink]="['/Accounts']">here</a>
              to go back.
            </div>
          </div>
          <div *ngIf="!success">
            <div class="server-err" [class.active]="error">
              <i class="fa fa-exclamation-circle"></i> {{ error }}
            </div>
            <div class="input-group">
              <label for="oldPassword">
                Old password
              </label>
              <input type="password" placeholder="Please enter your old password" name="oldPassword"
                id="oldPassword" ngControl="oldPassword">
              <div [class.active]="(submitted || changePasswordForm.controls.oldPassword.touched)
                && !changePasswordForm.controls.oldPassword.valid" class="err">
                <div *ngIf="changePasswordForm.controls.oldPassword.errors && changePasswordForm.controls.oldPassword.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your password
                </div>
                <div *ngIf="changePasswordForm.controls.oldPassword.errors && changePasswordForm.controls.oldPassword.errors.minimum">
                  <i class="fa fa-exclamation-circle"></i> Your password must have at least 6 characters
                </div>
              </div>
            </div>

            <div class="input-group">
              <label for="password">
                New password
              </label>
              <input type="password" placeholder="Please enter your new password" name="password"
                id="password" ngControl="password">
              <div [class.active]="(submitted || changePasswordForm.controls.password.touched)
                && !changePasswordForm.controls.password.valid" class="err">
                <div *ngIf="changePasswordForm.controls.password.errors && changePasswordForm.controls.password.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your password
                </div>
                <div *ngIf="changePasswordForm.controls.password.errors && changePasswordForm.controls.password.errors.minimum">
                  <i class="fa fa-exclamation-circle"></i> Your password must have at least 6 characters
                </div>
              </div>
            </div>
            <div class="input-group">
              <label for="password">
                Re-enter new password
              </label>
              <input type="password" placeholder="Please re-enter your new password" name="repassword"
                id="repassword" ngControl="repassword">
              <div [class.active]="(submitted || changePasswordForm.controls.repassword.touched)
                && !changePasswordForm.controls.repassword.valid" class="err">
                <div *ngIf="changePasswordForm.controls.repassword.errors && changePasswordForm.controls.repassword.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please re-enter your password
                </div>
                <div *ngIf="changePasswordForm.controls.repassword.errors && changePasswordForm.controls.repassword.errors.notMatch">
                  <i class="fa fa-exclamation-circle"></i> Your passwords don't match
                </div>
              </div>
            </div>
            <div class="buttons">
              <button class="btn" [class.submitting]="submitting">
                <span>Change password</span>
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `
})

export class ChangePassword {
  changePasswordForm;
  submitted: boolean;
  invalidCredentials: boolean;
  submitting: boolean;
  error: string;
  success: boolean;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService,
    private UserValidators: UserValidators) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', this.UserValidators.PasswordValidator],
      password: ['', this.UserValidators.PasswordValidator],
      repassword: ['', (control: any) : Object => {
        if (!control.value) {
          return {
            required: true
          };
        } else if (control.value !== this.changePasswordForm.value.password) {
          return {
            notMatch: true
          };
        }
      }]
    });
  }

  submitForm() {
    let changePassword = this.changePasswordForm.value;
    this.submitted = true;
    if (this.changePasswordForm.valid) {
      this.submitting = true;
      this.invalidCredentials = false;
      this.UserService.changePassword(changePassword.oldPassword, changePassword.password)
        .subscribe((res) => {
          setTimeout(() => {
            this.submitting = false;
            this.success = true;
          }, 250);
        }, (err) => {
          setTimeout(() => {
            this.submitting = false;
            if (err.status === 404) {
              this.error = 'Your old password doesn\'t match to our system';
            } else {
              this.error = 'Server error occured';
            }
          }, 250);
        });
    }
  }

}
