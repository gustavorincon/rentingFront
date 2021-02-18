import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


const commonComponents = [AppComponent];
const commonModules = [];

@NgModule({
  declarations: [...commonComponents],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    ...commonModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
