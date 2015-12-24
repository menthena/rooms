import {EMAIL_REGEX} from '../constants';
import {Control} from 'angular2/common';

export interface IUserValidators {
  EmailValidator(control: Control) : Object;
  PasswordValidator(control: Control): Object;
}

export class UserValidators implements IUserValidators {
  EmailValidator(control: Control) : Object {
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
  }

  PasswordValidator(control: Control) : Object {
    if (control.value && control.value.length < 6) {
      return {
        minimum: true
      };
    } else if (!control.value) {
      return {
        required: true
      };
    }
  }
}
