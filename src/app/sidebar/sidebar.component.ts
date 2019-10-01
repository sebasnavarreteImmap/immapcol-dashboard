import { Component, OnInit,ElementRef } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Inicio',  icon: 'pe-7s-home', class: '' },
    { path: '/fb-dashboard', title: 'Rastreo de usuarios venezolanos en Facebook',  icon: 'pe-7s-graph2', class: '' },
    { path: '/products', title: 'Productos',  icon: 'pe-7s-display1', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  private sidebar: any;
  private sidebar_wrapper: any;
  private mainpanel: any;
  public sidebarVisible: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.sidebar  = document.getElementsByClassName('sidebar')[0];
    this.sidebar_wrapper = document.getElementsByClassName('sidebar-wrapper')[0];
    this.mainpanel = document.getElementsByClassName('main-panel')[0];
    this.sidebarVisible = true;
  }

  sidebarOpen() {
    this.sidebar.classList.remove("sb-closed");
    this.sidebar_wrapper.classList.remove("sb-closed");
    this.mainpanel.classList.remove('sb-closed');
    this.sidebarVisible = true;
  };

  sidebarClose() {
      const body = document.getElementsByTagName('body')[0];
      this.sidebar.classList.add("sb-closed");
      this.sidebar_wrapper.classList.add("sb-closed");       
      this.mainpanel.classList.add('sb-closed');
      this.sidebarVisible = false;
  };

  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
