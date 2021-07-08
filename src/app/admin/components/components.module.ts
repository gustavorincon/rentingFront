import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatosInmuebleComponent } from './datos-inmueble/datos-inmueble.component';
import { InputsModule } from 'src/external-apis/form-components/src/public-api';
import { errorControls } from '../shared/model/const-errors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubtitilosFormulariosComponent } from './subtitilos-formularios/subtitilos-formularios.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    InputsModule.forRoot(errorControls),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DatosInmuebleComponent,
    SubtitilosFormulariosComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DatosInmuebleComponent
  ]
})
export class ComponentsModule { }
