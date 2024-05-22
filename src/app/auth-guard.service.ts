import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import {  ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}



// @Injectable()
// export class AuthGuardService {
//   constructor(private authService:AuthService,private router: Router) {}
  
// }


export const AuthGuardService: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  // return inject(AuthService).isLoggedIn()
  //   ? true
  //   : inject(Router).createUrlTree(['/login']);
  return sessionStorage.getItem('username')!==null
  ? true
  : inject(Router).createUrlTree(['/login']);


    

};
