// Angular Core
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant = 'primary';
  @Input() size = 'lg';
  @Input() buttonType = 'button';
  @Input() styles?: object;
  @Input() selfLink?: string;
  @Input() hover?: string;
  @Input() disabled = false;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleClick(): void {
    this.onClick.emit();
  }

  getClassName(className: string, hover?: string): string {
    if (hover) {
      return `lib-button_${className}-${hover}`;
    }
    return `lib-button_${className}`;
  }
}
