import { Component, OnInit,ElementRef, DoCheck } from '@angular/core';
import {Globals} from '../globals'

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES_ES: RouteInfo[] = [
    { path: '/home', title: 'Inicio',  icon: 'pe-7s-home', class: '' },
    { path: '/fb-dashboard', title: 'Rastreo de usuarios venezolanos en Facebook',  icon: 'pe-7s-graph2', class: '' },
    { path: '/products', title: 'Productos',  icon: 'pe-7s-display1', class: '' },
    { path: 'http://colombia.immap.org/caminantes/home.html', title: 'Caracterización de caminantes',  icon: 'pe-7s-note2', class: 'url-immap' },
    { path: '/sources', title: 'Fuentes',  icon: 'pe-7s-folder', class: '' },
];

export const ROUTES_EN: RouteInfo[] = [
  { path: '/home', title: 'Home',  icon: 'pe-7s-home', class: '' },
  { path: '/fb-dashboard', title: 'Tracking venezuelan users connected to Facebook',  icon: 'pe-7s-graph2', class: '' },
  { path: '/products', title: 'Deliverables',  icon: 'pe-7s-display1', class: '' },
  { path: 'http://colombia.immap.org/caminantes/home.html', title: 'Needs assesment of venezuelan refugees and migrants',  icon: 'pe-7s-note2', class: 'url-immap' },
  { path: '/sources', title: 'Sources',  icon: 'pe-7s-folder', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, DoCheck {
  menuItems: any[];
  private sidebar: any;
  private sidebar_wrapper: any;
  private mainpanel: any;
  public sidebarVisible: boolean;

  constructor(private element: ElementRef, public globals: Globals) { }

  ngOnInit() {
    this.menuItems = ROUTES_ES.filter(menuItem => menuItem);   
    this.sidebar  = document.getElementsByClassName('sidebar')[0];
    this.sidebar_wrapper = document.getElementsByClassName('sidebar-wrapper')[0];
    this.mainpanel = document.getElementsByClassName('main-panel')[0];
    this.sidebarVisible = true;
  }
  
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if (this.globals.language == 'ES') {
        this.menuItems = ROUTES_ES.filter(menuItem => menuItem);
    }else{
        this.menuItems = ROUTES_EN.filter(menuItem => menuItem);
    }
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
