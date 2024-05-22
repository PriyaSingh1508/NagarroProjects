import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';
import { NavbarMenuService } from './navbar-menu.service';
import { AppSettings } from '../../../app.settings';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'dcp-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  animations: [
    trigger('toggleState', [
      state('true', style({ right: '5px' })),
      state('false', style({ right: '-400px', display: 'none' })),
      state('normal', style({})),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('300ms')),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  menus: any[] = [];
  parentId: any;
  smallScreen: boolean;
  morlink: any;
  getInnerWidt: number;
  menuItems: any;
  subscription: any;
  @Input() items: any[];
  @Input() selectedTab: string='home';
  constructor(private navbarMenuService: NavbarMenuService,private authService:AuthService) {
  //   this.getInnerWidt = document.body.scrollWidth;
  //   this.checkhamburger();
  //   const getWindow = () => {
  //     return document.body.scrollWidth;
  //   };

  //   window.onresize = () => {
  //     this.getInnerWidt = getWindow();
  //     this.checkhamburger();
  //   };

  //   if (this.getInnerWidt >= 1300) {
  //     this.smallScreen = false;
  //     this.morlink = 'normal';
  //   }

  //   const iOS = navigator.platform.match(/i(Phone|Pod)/i);
  //   const mac = navigator.platform.match(/(Mac)/i) ? true : false;

  //   const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  //   if (mac || isMac) {
  //     this.smallScreen = false;
  //     this.morlink = 'normal';
  //     return;
  //   } else if (iOS) {
  //     this.smallScreen = true;
  //     return;
  //   }
  }

  ngOnInit() {
    this.loadMenu();
  }

  // Destroying subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // getChildItems(parentId: number) {
  //   const data = this.menus.filter(
  //     (item: any) => item.parentId === parentId && parentId > 0
  //   );
  //   return data;
  // }

  // Method use to show menu
  // public showMenu() {
  //   const iOS =
  //     !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  //   this.morlink = !this.morlink;
  // }

  // // Method use to checkhamburger
  // public checkhamburger() {
  //   const iOScheck = navigator.platform.match(/i(Phone|Pod)/i);
  //   // !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  //   window.addEventListener('orientationchange', function () {}, false);

  //   const mac = navigator.platform.match(/(Mac)/i) ? true : false;

  //   //     var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
  //   // var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i)?true:false;

  //   const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  //   if (mac || isMac) {
  //     this.smallScreen = false;
  //     this.morlink = 'normal';
  //     return;
  //   } else if (iOScheck) {
  //     this.smallScreen = true;
  //     return;
  //   }

  //   if (window.screen.availWidth < 1300) {
  //     this.smallScreen = true;
  //     this.morlink = 'normal';
  //   } else {
  //     this.smallScreen = false;
  //     this.morlink = 'normal';
  //   }
  // }

  // Method use to load menu
  private loadMenu() {
    this.menus = [];
    if (!this.navbarMenuService.menus) {
      this.navbarMenuService
        .getMenuDetail(AppSettings.GetMenuDetails)
        .subscribe((response) => {
          if (response.menu && response.menu.length > 0) {
            this.menus = response.menu;
            this.navbarMenuService.menus = response.menu;
          }
        });
    } else {
      this.menus = this.navbarMenuService.menus;
      this.navbarMenuService.menus = this.menus;
    }
    // console.log(this.menus);
  }
  isLoggedIn(){
   const isPresent=sessionStorage.getItem('username');
    if(isPresent) return true;

    return false;
 }
 selectTab(s:string){
  this.selectedTab=s;
 }
}
