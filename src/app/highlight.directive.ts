import { Directive, ElementRef, HostBinding, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostBinding('style.backgroundColor')backgroundColor = 'transparent';

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'green';
    this.elem.nativeElement.style.color = 'red';
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'transparent';
    this.elem.nativeElement.style.color = 'Black';
}

  gnOninit() {
    this.elem.nativeElement.style.backgroundColor = 'yellow';
    this.elem.nativeElement.style.color = 'white';
  }

}
