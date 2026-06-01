import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  islogin : BehaviorSubject<any> = new BehaviorSubject(false);

  Gmail: string = 'n@gmail.com';
  Password: string = '123456';
  login(login: Login):Observable<boolean> {
    return of((this.Gmail===login.email && this.Password===login.password))
  }

  constructor() {}
}
