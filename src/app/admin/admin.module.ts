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




@NgModule({
  declarations: [AdminLayoutComponent, RegistroInmuebleComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,
    AdminLayoutModule,
    InputsModule.forRoot(errorControls),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  exports : [RegistroInmuebleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
