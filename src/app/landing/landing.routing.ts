import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { RealStateFilterComponent } from './components/real-state-filter/real-state-filter.component';


export const LANDING_ROUTES: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    { path: 'busqueda', component: RealStateFilterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(LANDING_ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
export class LandingRoutingModule {}
