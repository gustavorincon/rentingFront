import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';
import { RealStateFilterComponent } from './components/real-state-filter/real-state-filter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RealStateDetailComponent } from './components/real-state-detail/real-state-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    LandingComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    RealStateFilterComponent,
    NavBarComponent,
    RealStateDetailComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    LandingRoutingModule
  ],
  exports: [
    RealStateDetailComponent
  ],
  bootstrap : [LandingComponent, RealStateDetailComponent]
})
export class LandingModule {

 }
