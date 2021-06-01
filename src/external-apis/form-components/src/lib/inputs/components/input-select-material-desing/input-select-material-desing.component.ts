import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponentsService } from '../../../form-components.service';

@Component({
  selector: 'lib-input-select-material-desing',
  templateUrl: './input-select-material-desing.component.html',
  styleUrls: ['./input-select-material-desing.component.scss'],
})
export class InputSelectMaterialDesingComponent {
  @Input() currentFormControl: FormGroup;
  @Input() isFormSubmit: boolean;
  @Input() items?: any[];
  @Input() label: string;
  @Input() displayError = true;
  @Input() id?: string;
  @Input() styleLabel?: object;
  @Input() styleSelect?: object;
  @Input() defaultOption?: string = 'Selecciona una opción';

  constructor(private inputService: FormComponentsService) {}

  displayFieldCss() {
    return {
      'lib-was-validate':
        (!this.currentFormControl.valid && this.currentFormControl.touched) ||
        (this.currentFormControl.untouched && this.isFormSubmit),
    };
  }

  showError(error: Object): string {
    if (this.displayError) {
      return this.inputService.showError(error);
    } else {
      return '';
    }
  }
}
