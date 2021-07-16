import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroInmuebleComponent } from '../../containers/registro-inmueble/registro-inmueble.component';
import { MisInmueblesComponent } from '../../containers/mis-inmuebles/mis-inmuebles.component';
import { InteresadosComponent } from '../../containers/interesados/interesados.component';


export const AdminLayoutRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'registro-inmueble',
          component: RegistroInmuebleComponent,
        },
        {
          path: 'mis-inmueble',
          component: MisInmueblesComponent,
        },
        {
          path: 'interesados',
          component: InteresadosComponent,
        }
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule],
    providers: [],
  })
  export class AdminRoutingModule {}
