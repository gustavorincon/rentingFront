import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminRoutingModule,
   // BrowserAnimationsModule,
   FormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ]
})
export class AdminModule { }
