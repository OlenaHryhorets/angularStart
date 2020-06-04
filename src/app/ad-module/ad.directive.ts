import { Directive, ViewContainerRef } from '@angular/core';

// AdDirective injects ViewContainerRef to gain access to the
// view container of the element that will host the dynamically added component.
@Directive({
  selector: '[ad-host]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
