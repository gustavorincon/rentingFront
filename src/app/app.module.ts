import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers/app.reducers';



const commonComponents = [AppComponent];
const commonModules = [];

@NgModule({
  declarations: [...commonComponents],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ...commonModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
