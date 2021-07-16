import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




export const routes: Routes = [
    { path: '', redirectTo: '/renta/inicio', pathMatch: 'full' },
    {
    path: 'renta',
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./landing/landing.module').then(m => m.LandingModule),
      },
      {
        path: 'administrador',
        /*canActivate: [LoginGuardsService],*/
        loadChildren: () =>
          import('./admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: 'buscador',
        loadChildren: () =>
          import('./search/search.module').then(m => m.SearchModule),
      },
      {
        path: 'usuario',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: '**', redirectTo: 'inicio', pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
