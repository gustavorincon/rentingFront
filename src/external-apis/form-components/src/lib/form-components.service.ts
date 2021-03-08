import { Injectable, Inject } from '@angular/core';
import { InputTextErrorControl } from './inputs/input-text-material-error-control.model';
import { errorControlService } from './inputs/error-control-injector';

@Injectable({
  providedIn: 'root',
})
export class FormComponentsService {
  constructor(
    @Inject(errorControlService) private errorControl: InputTextErrorControl[]
  ) {}

  showError(error: Object, errorControl?: InputTextErrorControl[]): string {
    if (errorControl !== undefined && errorControl !== null) {
      const control = errorControl.find(e => e.key === Object.keys(error)[0]);
      if (control) {
        return control.errorMessage;
      }
    } else if (this.errorControl !== undefined && this.errorControl !== null) {
      const control = this.errorControl.find(
        e => e.key === Object.keys(error)[0]
      );
      if (control) {
        return control.errorMessage;
      }
    } else {
      return '';
    }
  }
}
