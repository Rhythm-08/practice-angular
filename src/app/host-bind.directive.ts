import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostBind]'
})
export class HostBindDirective {

  constructor() { }
  @HostBinding('disabled')
  isDisabled: boolean = false;

  @HostListener('mouseenter')
  enable() {
    this.isDisabled = false;
  }

  @HostListener('mouseleave')
  disable() {
    this.isDisabled = true;
  }
}

