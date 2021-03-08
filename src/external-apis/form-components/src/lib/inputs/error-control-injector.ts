import { InjectionToken } from '@angular/core';
import { InputTextErrorControl } from './input-text-material-error-control.model';

export const errorControlService = new InjectionToken<InputTextErrorControl>(
  'InputTextErrorControl'
);
