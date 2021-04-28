import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NgModule } from '@angular/core';
import { RegistroInmuebleComponent } from '../../containers/registro-inmueble/registro-inmueble.component';


export const AdminLayoutRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'registro-inmueble',
          component: RegistroInmuebleComponent,
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        {
          path: 'table-list',
          component: TableListComponent,
        },
        {
          path: 'typography',
          component: TypographyComponent,
        },
        {
          path: 'upgrade',
          component: UpgradeComponent,
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
