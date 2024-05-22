import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth.service';

/**
 * This class represents the Toolbar component.
 */

@Component({
  selector: 'dcp-titlebar',
  templateUrl: 'titlebar.component.html',
  styleUrls: ['titlebar.component.scss'],
})
export class TitlebarComponent {
    
     constructor(private authService:AuthService) {
     
      
     }

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null? true:false;
    // return this.authService.isLoggedIn();
  }

 logout(): void{
  this.authService.logout();
 //  this.authService.isLoggedIn();
  
 }
}
