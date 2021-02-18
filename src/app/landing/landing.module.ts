import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';



@NgModule({
  declarations: [
    LandingComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  bootstrap : [LandingComponent]
})
export class LandingModule {

 }
