import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AppSettings } from './app.settings';
import { LoginModel } from './login/login.model';
import { Observable, of, throwError } from 'rxjs';
import { BlobStorageService } from './shared/services';

@Injectable()

// Class represent Auth service
export class AuthService {
  public userInfo: any;
  public loginEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  public loaderEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  public selectedLanguageCodeChange: EventEmitter<string> =
    new EventEmitter<string>();
  public menuLodaed: EventEmitter<any> = new EventEmitter<any>();
  public currentLanguage: string = AppSettings.DefaultLanguageCulture
    ? AppSettings.DefaultLanguageCulture
    : 'en';
  public errorMessage: string;
  public isCESLogin: boolean;
  public signOut: string;
  public currentPath: string;
  public menus: any;
  public taskId: string;
  constructor(private routes: Router) {
    this.userInfo = new LoginModel();
    this.currentPath = window.location.pathname;
   // this.redirectUser();
    // this.validateUser('z003ufcc');
  }

  // Method use to login in application
  // public login(userName: string, password: string) {
  //   return false;
  // }



  public  login(userName: string, password: string): Observable<boolean> {
  
    if (userName === '' || password === '') {
      this.redirectUser();
      return throwError('User name and password are required.');
    }
    
    this.userInfo.userName = userName;
    this.userInfo.password = password;
    this.userInfo.isUserLoggedIn=true;
   
    sessionStorage.setItem('username', userName);
    return of(true);
  }

   // Check if user is authenticated
   isLoggedIn(): boolean {

    return this.userInfo.isUserLoggedIn==true?true:false;
  }



  // Method use to logout from application
  public logout() {
    this.startLoader();
    sessionStorage.clear();
   // this.userInfo = null;

    localStorage.clear();
    //this.userInfo.isUserLoggedIn=false;
    this.loginEmitter.emit(false);
  }

  // Method use to redirect on login page
  public redirectUser() {
    if (this.userInfo && !this.userInfo.isUserLoggedIn) {
      try {
      } catch (ex) {}
    }
  }

  // Method use to start loader Z003W2UX Z003W2TU(H) Z00W2UX z003ufcc
  public startLoader() {
    this.loaderEmitter.emit(true);
  }

  // Method use to stop loader
  public stopLoader() {
    this.loaderEmitter.emit(false);
  }

  // Method use to get current culture
  public getCurrentCulture() {
    return 'en'; //this.translateService.currentLang;
  }

  public redirectCustomError(message: any = '') {
    const self = this;
    if (this.currentLanguage === 'en') {
      self.signOut = 'Sign Out';
      self.errorMessage = message
        ? message
        : 'You are not authorized! Please contact system administrator.';
    }
    setTimeout(() => {
      this.userInfo.isUserLoggedIn = false;
      this.loginEmitter.emit(this.userInfo.isUserLoggedIn);
      self.routes.navigate(['/error']);
      this.userInfo = null;
      self.stopLoader();
    }, 1000);
  }
}
