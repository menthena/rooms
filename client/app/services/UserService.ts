import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {ENV_URL} from '../app.config';

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
  }

  login(email: string, password: string) {
    let observable = this.http.post('/oauth/login', JSON.stringify({
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
        this.isLogged = false;
        return err;
      });
    return subscription;
  }

  recoverPassword(email: string) {
    let observable = this.http.post('/oauth/forgot-password', JSON.stringify({
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
    let observable = this.http.patch('/oauth/change-password', JSON.stringify({
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
    let observable = this.http.get('/oauth/tokeninfo');
    let subscription = observable
      .subscribe((res: any) => {
        this.userData = res.json();
        this.isLogged = true;
        this.userObservable
          .subscription
          .next();
        return res;
      }, (err) => {
        this.isLogged = false;
        return err;
      });
    return subscription;
  }

  register(userObject: Object) {
    let observable = this.http.post('/api/user', JSON.stringify(userObject), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return observable;
  }
}
