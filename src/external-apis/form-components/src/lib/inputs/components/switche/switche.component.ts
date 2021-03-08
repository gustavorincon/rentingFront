import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-switche',
  template: `
    <label class="custom-control-label" [class.active]="active"></label>
  `,
  styleUrls: ['./switche.component.scss'],
})
export class SwitcheComponent {
  @Input() active?: boolean = false;

  constructor() {}
}
