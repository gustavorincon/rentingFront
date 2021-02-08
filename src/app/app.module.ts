import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

const commonComponents = [AppComponent];
const commonModules = [LandingModule];

@NgModule({
  declarations: [...commonComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ...commonModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
