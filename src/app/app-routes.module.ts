import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MycomplaintComponent } from './my-complaints/mycomplaint/mycomplaint.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent} from './login';


export const routes: Routes = [  
  {path:'', component:HomeComponent},
  {path:'my-complaints', component:MycomplaintComponent, canActivate: [AuthGuardService]},
  {path: 'login', component:LoginComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
