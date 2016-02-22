import {Component} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {EMAIL_REGEX} from '../../config/constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';
import {UserValidators} from '../../validators/UserValidators';

@Component({
  selector: 'register',
  styleUrls: ['styles/common/generic-form.css'],
  template: `
    <div class="generic-form">
      <form #registerForm="ngForm" (ngSubmit)="submitLoginForm($event)" novalidate>
        <fieldset>
          <legend *ngIf="!isIonic">Register</legend>
          <div class="white-bg">
            <div class="server-err" [class.active]="error">
              <i class="fa fa-exclamation-circle"></i> {{ error }}
            </div>

            <div class="input-group" *ngIf="companyName">
              <label for="companyName">
                Company name
              </label>
              <div>
                {{ companyName }}
              </div>
            </div>

            <div class="input-group">
              <label for="name">
                Name
              </label>
              <input type="name" placeholder="Please enter your name" name="name" id="name"
                ngControl="name">
              <div [class.active]="(submitted || registerForm.controls.name.touched) && !registerForm.controls.name.valid" class="err">
                <div *ngIf="registerForm.controls.name.errors && registerForm.controls.name.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your name
                </div>
              </div>
            </div>

            <div class="input-group" *ngIf="!companyID">
              <label for="companyName">
                Company name
              </label>
              <input type="companyName" placeholder="Please enter the company name" name="companyName" id="companyName"
                ngControl="companyName">
              <div [class.active]="(submitted || registerForm.controls.companyName.touched) &&
                  !registerForm.controls.companyName.valid" class="err">
                <div *ngIf="registerForm.controls.companyName.errors && registerForm.controls.companyName.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter the company name
                </div>
              </div>
            </div>

            <div class="input-group">
              <label for="email">
                Email
              </label>
              <input type="email" placeholder="Please enter your email" name="email" id="email"
                ngControl="email">
              <div [class.active]="(submitted || registerForm.controls.email.touched) && !registerForm.controls.email.valid" class="err">
                <div *ngIf="registerForm.controls.email.errors && registerForm.controls.email.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please enter your email
                </div>
                <div *ngIf="registerForm.controls.email.errors && registerForm.controls.email.errors.invalid">
                  <i class="fa fa-exclamation-circle"></i> Please enter a valid email
                </div>
              </div>
            </div>

            <div class="input-group">
              <label for="reemail">
                Re-enter email
              </label>
              <input type="reemail" placeholder="Please re enter your reemail" name="reemail" id="reemail"
                ngControl="reemail">
              <div [class.active]="(submitted || registerForm.controls.reemail.touched) && !registerForm.controls.reemail.valid"
                class="err">
                <div *ngIf="registerForm.controls.reemail.errors && registerForm.controls.reemail.errors.required">
                  <i class="fa fa-exclamation-circle"></i> Please re-enter your email
                </div>
                <div *ngIf="registerForm.controls.reemail.errors && registerForm.controls.reemail.errors.notMatch">
                  <i class="fa fa-exclamation-circle"></i> Your passwords don't match
                </div>
              </div>
            </div>

            <div class="input-group">
              <label for="password">
                Password
              </label>
              <input type="password" placeholder="Please enter you password" name="password"
                id="password" ngControl="password">
                <div [class.active]="(submitted || registerForm.controls.password.touched)
                  && !registerForm.controls.password.valid" class="err">
                  <div *ngIf="registerForm.controls.password.errors && registerForm.controls.password.errors.required">
                    <i class="fa fa-exclamation-circle"></i> Please enter your password
                  </div>
                  <div *ngIf="registerForm.controls.password.errors && registerForm.controls.password.errors.minimum">
                    <i class="fa fa-exclamation-circle"></i> Your password must have at least 6 characters
                  </div>
                </div>

              <div class="tip">
                <i class="fa fa-info-circle"></i>
                Password must have at least 6 characters
              </div>
            </div>
            <div class="buttons">
              <button class="btn" [class.submitting]="submitting && !isIonic"
                [class.submitting-ionic]="submitting && isIonic">
                <span>Register</span>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  `
})

export class Register {
  registerForm: NgForm;
  submitted: boolean;
  success: boolean;
  isIonic: boolean;
  submitting: boolean;
  error: string;
  companyID: string;
  companyName: string;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService,
    private UserValidators: UserValidators, private AppService: AppService) {
    let isCompanyRequired = Validators.required;
    // this.companyID = this.routeParams.params.id;
    if (this.companyID) {
      isCompanyRequired = undefined;
    }
    this.isIonic = this.AppService.isIonic;
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', isCompanyRequired],
      email: ['', this.UserValidators.EmailValidator],
      reemail: ['', (control: any) : Object => {
        if (!control.value) {
          return {
            required: true
          };
        } else if (control.value !== this.registerForm.value.email) {
          return {
            notMatch: true
          };
        }
      }],
      password: ['', this.UserValidators.PasswordValidator]
    });
  }

  ngOnInit() {
    if (this.companyID) {
      this.UserService.getCompany(this.companyID)
        .subscribe((res) => {
          let company = res.json().data;
          this.companyName = company.companyName;
        });
    }
  }

  submitLoginForm() {
    let register = this.registerForm.value;
    this.submitted = true;
    if (this.registerForm.valid) {
      this.submitting = true;
      this.UserService.register({
        companyName: register.companyName,
        name: register.name,
        email: register.email,
        password: register.password,
        companyID: this.companyID
      }).subscribe((res) => {
          setTimeout(() => {
            this.submitting = false;
            this.router.navigate(['RegisterSuccess']);
          }, 250);
        }, (err) => {
          this.submitting = false;
          if (err.status === 409) {
            this.error = 'There is a user with the same email address.';
          } else {
            this.error = 'Server error occured';
          }
        });
    }
  }

}
