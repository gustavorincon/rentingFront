import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/renta/administrador/registro-inmueble', title: 'Registrar inmueble',  icon: 'design_app', class: '' },
    { path: '/renta/administrador/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/renta/administrador/table-list', title: 'Table List',  icon: 'design_bullet-list-67', class: '' },
    { path: '/renta/administrador/typography', title: 'Typography',  icon: 'text_caps-small', class: '' },
    { path: '/renta/administrador/upgrade', title: 'Upgrade to PRO',  icon: 'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  // tslint:disable-next-line:typedef
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
}
