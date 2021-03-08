import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-type-of-check',
  template: `
    <label class="type-of-checkbox" [ngStyle]="labelStyles">
      <span
        *ngIf="value"
        class="type-of-checkbox__value"
        [ngStyle]="spanStyles"
        >{{ value }}</span
      >
      <input
        type="checkbox"
        class="type-of-checkbox__input"
        [formControl]="currentForm"
      />
      <ng-content></ng-content>
    </label>
  `,
  styleUrls: ['./type-of-check.component.scss'],
})
export class TypeCheckComponent {
  @Input() currentForm: FormControl;
  @Input() value?: string;
  @Input() labelStyles?: object;
  @Input() spanStyles?: object;

  constructor() {}
}
