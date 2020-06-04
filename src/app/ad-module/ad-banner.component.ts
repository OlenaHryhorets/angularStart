import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from "./ad.directive";
import {AdComponent} from "./ad.component";
import {AdItem} from "./ad-item";


@Component({
  selector: 'app-ad-banner',
  template: `
      <div class="ad-banner">
          <h3>Advertisements</h3>
          <h4>I'm dynamic!</h4>
          <ng-template ad-host></ng-template>
      </div>
  `,
  styles: [
  ]
})
export class AdBannerComponent implements OnInit {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
//The loadComponent() method first chooses an ad using some math
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
//After loadComponent() selects an ad, it uses ComponentFactoryResolver to resolve a ComponentFactory for each specific component.
// The ComponentFactory then creates an instance of each component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
//Next, you're targeting the viewContainerRef that exists on this specific instance of the component
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
//As you may recall, AdDirective injects ViewContainerRef into its constructor. This is how the directive accesses the element
// that you want to use to host the dynamic component.
// To add the component to the template, you call createComponent() on ViewContainerRef.
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data; //The createComponent() method returns a reference to
    // the loaded component. Use that reference to interact with the component by assigning to its properties or calling its methods.
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
