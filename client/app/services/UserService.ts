import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs';

interface IUserService {
  login(email: string, password: string) : void;
}

@Injectable()
export class UserService implements IUserService {
  public isLogged: boolean;

  constructor(private http: Http) { }

  login(email: string, password: string) {
    let observable = this.http.post('/oauth/login', JSON.stringify({
      email: email,
      password: password
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    let subscription = observable
      .delay(500)
      .subscribe((res: any) => {
        this.isLogged = true;
        console.log(res);
        return res;
      }, (err) => {
        this.isLogged = false;
        return err;
      });
    return subscription;
  }
}
