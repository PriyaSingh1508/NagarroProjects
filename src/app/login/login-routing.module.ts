import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent, LogoutComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent},
      { path: 'logout', component: LogoutComponent },
    ])
  ],
  exports: [RouterModule]
})

// class represent the login routing module
export class LoginRoutingModule { }
