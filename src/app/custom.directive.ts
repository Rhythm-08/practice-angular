import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  regexStr = '^[a-zA-Z0-9 _]*$';
  constructor() { }
  @HostListener('keypress', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    return new RegExp(this.regexStr).test(event.key);
  }
}
