import { NgModule } from "@angular/core";
import { RentingSharedLibsModule } from './shared-libs.module';

@NgModule({
    imports: [RentingSharedLibsModule],
    declarations: [
    ],
    entryComponents: [],
    exports: [
        RentingSharedLibsModule
    ]
  })
  export class RentingSharedModule {}