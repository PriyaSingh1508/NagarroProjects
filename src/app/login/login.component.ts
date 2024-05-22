import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from './index';
//import { MultilingualService } from '../shared/components/i18n/multilingual.service';
import { AuthService } from '../auth.service';
import { BlobStorageService } from '../shared/services';
import { user } from './user.model';

@Component({

  selector: 'sfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading: boolean;
 jsonData:any;
 captchaResolved: boolean = false;
 userData:user[]=[];
 siteKey: string = "6LddJKEpAAAAAOE5AEkCZdxSBJSGUzdMU1Wk1OGt";

  constructor(
   private authService: AuthService,
    private routes: Router,
 private blobStorageService:BlobStorageService
    // private multilingualService: MultilingualService
  ) {
    this.model = new LoginModel();
  }
 
 
  // ngOnInit() {
  //   this.authService.stopLoader();
  //   this.loading = false;
    
  // }
 async ngOnInit(): Promise<any>{
    this.authService.stopLoader();
    this.loading = false;
   await  this.fetchJSONData();
  }
  
  async fetchJSONData(): Promise<void> {
    try {
      this.blobStorageService.getUserData().subscribe(
        data => {
          this.userData = data;
        },
        error => {
          console.error('Error fetching JSON data:', error);
        }
      );
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }
  
  public resolved(captchaResponse: any) { 
    if(captchaResponse)
    this.captchaResolved = true;
    }
  // Method use to login in application
   login() {
    this.loading = true;
    this.authService.startLoader();
    const myUser = this.userData.find((user) => user.email=== this.model.username && user.password === this.model.password);
    if(myUser){
      this.authService.login(this.model.username, this.model.password).subscribe(data=>{
        this.authService.stopLoader();
        this.loading=false;
      
       // this.fetchJSONData();
        if(data) this.routes.navigate(['/my-complaints']);
        else console.log('Error in username or password');
      },error =>{this.loading=false;
      this.authService.stopLoader();
    }
      );
    }
   else{
    console.log("invalid credentials");
    this.loading=false;
    this.authService.stopLoader();
   }
        // this.authService.login(this.model.username, this.model.password)
        //     .subscribe(
        //     data => {
        //         this.authService.stopLoader();
        //         this.loading = false;
        //         if (data) {
        //             this.routes.navigate(['/']);
        //         } else {
        //             this.eventService.showErrorMessage('userOrPasswordWrong');
        //         }

        //     },
        //     error => {
        //         this.loading = false;
        //         this.eventService.showErrorMessage('userOrPasswordWrong');
        //         this.authService.stopLoader();
        //     }
        //     );
  }
}
