import { Component, OnInit, Input } from '@angular/core';
import { FormComponentsService } from '../../../form-components.service';

@Component({
  selector: 'lib-check-container',
  template: `
    <div
      class="check-container"
      [class.check-container_active]="active"
      [class.check-container_error]="isFormSubmit && !active"
      [ngStyle]="styles"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./check-container.component.scss'],
})
export class CheckContainerComponent implements OnInit {
  @Input() active?: boolean = false;
  @Input() styles?: object;
  @Input() isFormSubmit?: boolean;

  constructor(private inputService: FormComponentsService) {}

  ngOnInit() {}
}
