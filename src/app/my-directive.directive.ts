import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef :ElementRef) { }
  @HostListener('click')
  onClick(){
  console.log("Hello World");
  }


}
