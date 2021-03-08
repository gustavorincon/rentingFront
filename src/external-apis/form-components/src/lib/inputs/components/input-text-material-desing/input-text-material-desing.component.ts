// Angular Core
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponentsService } from '../../../form-components.service';
import { InputTextErrorControl } from '../../input-text-material-error-control.model';

@Component({
  selector: 'lib-input-text-material-desing',
  templateUrl: './input-text-material-desing.component.html',
  styleUrls: ['./input-text-material-desing.component.scss'],
})
export class InputTextMaterialDesingComponent implements OnInit {
  @Input() currentFormControl: FormControl;
  @Input() isFormSubmit: boolean;
  @Input() label: string;
  @Input() type = 'text';
  @Input() limitarCaracteres?: number;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() displayError = true;
  @Input() inputClass?: string;
  @Input() styles?: object;
  @Input() inputTextErrorControl?: InputTextErrorControl[] = null;
  @Input() id?: string;
  @Input() styleLabel?: object;
  @Output() ngBlur = new EventEmitter();

  constructor(private inputService: FormComponentsService) {}

  ngOnInit() {}

  displayFieldCss() {
    return {
      'lib-was-validate':
        (!this.currentFormControl.valid && this.currentFormControl.touched) ||
        (this.currentFormControl.untouched &&
          this.isFormSubmit &&
          (this.currentFormControl.value === undefined ||
            this.currentFormControl.value === null)),
    };
  }

  showError(error: Object): string {
    if (this.displayError) {
      return this.inputService.showError(error, this.inputTextErrorControl);
    } else {
      return '';
    }
  }

  onBlur() {
    this.ngBlur.emit();
  }
}
