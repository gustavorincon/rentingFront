import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { RegistroInmuebleComponent } from './containers/registro-inmueble/registro-inmueble.component';
import { InputsModule } from 'src/external-apis/form-components/src/lib/inputs/inputs.module';
import { errorControls } from './shared/model/const-errors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '../store/reducers/app.reducers';
import { effectsArray } from './store/effects/app.effects';
import { MisInmueblesComponent } from './containers/mis-inmuebles/mis-inmuebles.component';
import { InteresadosComponent } from './containers/interesados/interesados.component';




@NgModule({
  declarations: [AdminLayoutComponent, RegistroInmuebleComponent, MisInmueblesComponent, InteresadosComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,
    AdminLayoutModule,
    InputsModule.forRoot(errorControls),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('admin', reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forFeature(effectsArray),
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  exports : [RegistroInmuebleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
