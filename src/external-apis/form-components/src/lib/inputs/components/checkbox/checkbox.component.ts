import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-checkbox',
  template: `
    <span
      class="checkbox"
      [id]="id"
      [class.checkbox_active]="active"
      [ngStyle]="styles"
    ></span>
  `,
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() active?: boolean = false;
  @Input() styles?: object;
  @Input() id: string;

  constructor() {}
}
