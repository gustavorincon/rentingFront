import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';
import { GeneralFiltersComponent } from './components/general-filters/general-filters.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SpecificFiltersComponent } from './components/specific-filters/specific-filters.component';



@NgModule({
  declarations: [
    SearchComponent,
    GeneralFiltersComponent,
    ProductsListComponent,
    SpecificFiltersComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  bootstrap: [SearchComponent],
})
export class SearchModule { }
