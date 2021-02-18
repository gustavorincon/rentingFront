import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

export const SEARCH_ROUTES: Routes = [
    {
        path: '',
        component: SearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(SEARCH_ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
export class SearchRoutingModule {
    constructor(){
        console.log('buscarrr');
    }
}