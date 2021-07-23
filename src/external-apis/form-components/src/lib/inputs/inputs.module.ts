// Angular Core
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
// tslint:disable-next-line:max-line-length
import { InputTextMaterialDesingComponent } from './components/input-text-material-desing/input-text-material-desing.component';
import { ButtonComponent } from './components/button/button.component';
// tslint:disable-next-line:max-line-length
import { InputSelectMaterialDesingComponent } from './components/input-select-material-desing/input-select-material-desing.component';
import { SwitcheComponent } from './components/switche/switche.component';
import { CheckContainerComponent } from './components/check-container/check-container.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TypeCheckComponent } from './components/type-of-check/type-of-check.component';
import { InputTextErrorControl } from './input-text-material-error-control.model';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FormComponentsService } from '../form-components.service';
import { errorControlService } from './error-control-injector';
import { RouterModule } from '@angular/router';
import { LimitNumberDirective } from './directives/limit-number.directive';
import { InputTextAreaMaterialDesingComponent } from './components/input-text-area-material-desing/input-text-area-material-desing.component';

@NgModule({
  declarations: [
    InputTextMaterialDesingComponent,
    ButtonComponent,
    InputSelectMaterialDesingComponent,
    SwitcheComponent,
    CheckContainerComponent,
    CheckboxComponent,
    TypeCheckComponent,
    LimitNumberDirective,
    InputTextAreaMaterialDesingComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    InputTextMaterialDesingComponent,
    ButtonComponent,
    InputSelectMaterialDesingComponent,
    SwitcheComponent,
    CheckContainerComponent,
    CheckboxComponent,
    TypeCheckComponent,
    LimitNumberDirective,
    InputTextAreaMaterialDesingComponent
  ],
})
export class InputsModule {
  static forRoot(errorControl: InputTextErrorControl[]): ModuleWithProviders {
    return {
      ngModule: InputsModule,
      providers: [
        FormComponentsService,
        {
          provide: errorControlService,
          useValue: errorControl,
        },
      ],
    };
  }
}

// @NgModule({
//   declarations: [
//     InputTextMaterialDesingComponent,
//     ButtonComponent,
//     InputSelectMaterialDesingComponent
//   ],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule
//   ],
//   exports: [
//     InputTextMaterialDesingComponent,
//     ButtonComponent,
//     InputSelectMaterialDesingComponent
//   ]
// })
// export class InputsModule { }
