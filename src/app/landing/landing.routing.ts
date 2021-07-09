import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { RealStateFilterComponent } from './components/real-state-filter/real-state-filter.component';
import { RealStateDetailComponent } from './components/real-state-detail/real-state-detail.component';


export const LANDING_ROUTES: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    { path: 'busqueda/:city', component: RealStateFilterComponent },
    { path: 'detalle/:code', component: RealStateDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(LANDING_ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
export class LandingRoutingModule {}
