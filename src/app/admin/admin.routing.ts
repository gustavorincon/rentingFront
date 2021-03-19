import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';



const rutas: Routes =[
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: () =>
          import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
    }]},
    {
      path: '**',
      redirectTo: ''
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
    providers: [],
  })
export class AdminRoutingModule{}