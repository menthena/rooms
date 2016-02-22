import {Component} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {EMAIL_REGEX} from '../../config/constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';
import {UserValidators} from '../../validators/UserValidators';

@Component({
  selector: 'recover-password',
  styleUrls: ['styles/common/generic-form.css'],
  template: `
  <div class="generic-form">
    <form #recoverPasswordForm="ngForm" (ngSubmit)="submitRecoverPassword($event)" novalidate>
      <fieldset>
        <legend *ngIf="!isIonic">Recover password</legend>
        <div class="white-bg">
          <div *ngIf="success" class="success row">
            <div class="col-xs-1">
              <i class="fa fa-check"></i>
            </div>
            <div class="col-xs-10 success-message">
              We have sent an email with instructions to recover your password.
            </div>
          </div>
          <div *ngIf="!success">
            <div class="message">
              Please enter the email address you have used to register.
              We will send an email with instructions.
            </div>
            <div class="server-err" [class.active]="invalidCredentials">
              <i class="fa fa-exclamation-circle"></i> Invalid email or password
            </div>
            <div class="input-group">
              <label for="email">
                Email
              </label>
              <input type="email" placeholder="Please enter your email" name="email" id="email"
                ngControl="email">
              <div [class.active]="(submitted || recoverPasswordForm.controls.email.touched)
                && !recoverPasswordForm.controls.email.valid" class="err">
                <div *ngIf="recoverPasswordForm.controls.email.errors && recoverPasswordForm.controls.email.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your email
                </div>
                <div *ngIf="recoverPasswordForm.controls.email.errors && recoverPasswordForm.controls.email.errors.invalid">
                  <i class="fa fa-exclamation-circle"></i> Please enter a valid email
                </div>
              </div>

            </div>
            <div class="buttons">
              <button class="btn" [class.submitting]="submitting">
                <span>Recover password</span>
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `
})

export class RecoverPassword {
  recoverPasswordForm;
  submitted: boolean;
  isIonic: boolean;
  invalidCredentials: boolean;
  submitting: boolean;
  success: boolean;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService,
    private UserValidators: UserValidators, private AppService: AppService) {
    this.isIonic = this.AppService.isIonic;
    this.recoverPasswordForm = this.fb.group({
      email: ['', this.UserValidators.EmailValidator]
    });
  }

  submitRecoverPassword() {
    let login = this.recoverPasswordForm.value;
    this.submitted = true;
    if (this.recoverPasswordForm.valid) {
      this.submitting = true;
      this.invalidCredentials = false;
      this.UserService.recoverPassword(login.email)
        .subscribe((res) => {
          setTimeout(() => {
            this.submitting = false;
            this.success = true;
          }, 250);
        }, (err) => {
          setTimeout(() => {
            this.submitting = false;
          }, 250);
        });
    }
  }

}
