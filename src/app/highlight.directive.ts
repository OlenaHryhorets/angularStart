import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: string;//Inside the directive the property
//  is known as highlightColor. Outside the directive, where you bind to it, it's known as appHighlight.
  @Input() defaultColor: string; //a second input property to HighlightDirective


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');//it first tries to highlight with
// the highlightColor, then with the defaultColor, and falls back to "red" if both properties are undefined
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
