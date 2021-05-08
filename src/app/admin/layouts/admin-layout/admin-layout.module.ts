import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-layout.routing';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ChartsModule,
    NgbModule,
  ],
  declarations: [
    TableListComponent,
    UpgradeComponent,
    TypographyComponent
  ]
})

export class AdminLayoutModule {}
