import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'dcp-web';
  selectedTab: string;
  constructor(private router: Router) {}
  ngOnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      this.setActiveTab(event.url);
    });
  }
  setActiveTab(url: string) {
    if (url.includes('/my-complaints')) {
      this.selectedTab = 'my-complaints';
    } else if (url.includes('/file-complaint')) {
      this.selectedTab = 'file-complaint';
    } else if (url.includes('/complaint-forms')) {
      this.selectedTab = 'complaint-forms';
    } else {
      this.selectedTab = 'home';
    }
  }
}
