
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout//logout.component';
import { SharedModule } from '../shared/shared.module';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [SharedModule, LoginRoutingModule,RecaptchaModule],
  declarations: [LoginComponent, LogoutComponent],
  exports: [LoginComponent]
})
// class represent Login module
export class LoginModule { }
