import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appLimitNumberDirective]',
})
export class LimitNumberDirective {
  @Input() appLimitNumberDirective;

  @HostListener('keypress', ['$event'])
  handleKeyboardEvent(event) {
    if (this.appLimitNumberDirective) {
      const limitTo = this.appLimitNumberDirective;
      if (limitTo * 1 === event.target.value.length) {
        event.preventDefault();
      }
    }
  }
}
