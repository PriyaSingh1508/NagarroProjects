import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../login.model';
import { AuthService } from '../../auth.service';

@Component({
 
  selector: 'sfs-logout',
  template: '<div>Logout</div>',
})
export class LogoutComponent implements OnInit {
  model: any = {};
  loading: boolean;
  constructor(private authService: AuthService, private routes: Router) {
    this.model = new LoginModel();
  }
  ngOnInit() {
    this.authService.stopLoader();
    this.loading = false;
   
  }
  // Method use to login in application
  // login() {
  //   this.loading = true;
  //   this.authService.startLoader();
  //   //     this.authService.login(this.model.username, this.model.password)
  //   //         .subscribe(
  //   //         data => {
  //   //             this.authService.stopLoader();
  //   //             this.loading = false;
  //   //             if (data) {
  //   //                 this.routes.navigate(['/']);
  //   //             } else {
  //   //                 this.eventService.showErrorMessage('userOrPasswordWrong');
  //   //             }

  //   //         },
  //   //         error => {
  //   //             this.loading = false;
  //   //             this.eventService.showErrorMessage('userOrPasswordWrong');
  //   //             this.authService.stopLoader();
  //   //         }
  //   //         );
  // }

 
}
