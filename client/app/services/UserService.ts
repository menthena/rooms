import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {ENV_URL} from '../app.config';

declare var window: any;

interface IUserService {
  login(email: string, password: string) : void;
  recoverPassword(email: string) : void;
  resetPassword(email: string, password: string, token: string) : void;
  changePassword(oldPassword: string, newPassword: string) : void;
  register(userObject: Object) : void;
  getUser() : void;
}

@Injectable()
export class UserService implements IUserService {
  public isLogged: boolean;
  public userData: Object;
  userObservable;

  constructor(private http: Http) {
    this.userObservable = Observable
      .create(observer => {
        return () => console.log('disposed');
      }).publish();

    // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
    let _build = (<any> this.http)._backend._browserXHR.build;
    (<any> this.http)._backend._browserXHR.build = () => {
      let _xhr =  _build();
      _xhr.withCredentials = true;
      return _xhr;
    };
  }

  login(email: string, password: string) {
    let observable = this.http.post(ENV_URL + '/oauth/login', JSON.stringify({
      email: email,
      password: password
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    let subscription = observable
      .subscribe((res: any) => {
        this.isLogged = true;
        this.userData = res.json();
        this.userObservable
          .subscription
          .next();
        return res;
      }, (err) => {
        return err;
      });
    return subscription;
  }

  recoverPassword(email: string) {
    let observable = this.http.post(ENV_URL + '/oauth/forgot-password', JSON.stringify({
      email: email
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return observable;
  }

  resetPassword(email: string, password: string, token: string) {
    let observable = this.http.post('/oauth/reset-password', JSON.stringify({
      email: email,
      password: password,
      token: token
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return observable;
  }

  changePassword(oldPassword: string, newPassword: string) {
    let observable = this.http.patch(ENV_URL + '/oauth/change-password', JSON.stringify({
      oldPassword: oldPassword,
      password: newPassword
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return observable;
  }

  getUserObservable() {
    return this.userObservable;
  }

  getUser() {
    let observable = this.http.get(ENV_URL + '/oauth/tokeninfo');
    let subscription = observable
      .subscribe((res: any) => {
        this.userData = res.json();
        this.isLogged = true;
        this.userObservable
          .subscription
          .next();
        return res;
      }, (err) => {
        // this.isLogged = false;
        return err;
      });
    return subscription;
  }

  register(userObject: Object) {
    let observable = this.http.post(ENV_URL + '/api/user', JSON.stringify(userObject), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return observable;
  }
}
