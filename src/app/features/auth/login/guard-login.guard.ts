import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { LoginServiceService } from 'src/app/core/services/login-service.service';

@Injectable()
export class GuardLogin implements CanActivate {
    constructor(private router: Router , private login : LoginServiceService) { }
    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.login.islogin.pipe(map(isAuth => { 
            console.log(isAuth);
                       
            if(!isAuth) this.router.navigate(['/login']); 
            return isAuth
        }))  
    }
}




















// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GuardGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }

