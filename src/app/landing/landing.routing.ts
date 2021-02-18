import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';


export const LANDING_ROUTES: Routes = [
    {
        path: '',
        component: LandingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(LANDING_ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
export class LandingRoutingModule {

    constructor() {
        console.log('hellooo');
    }
}