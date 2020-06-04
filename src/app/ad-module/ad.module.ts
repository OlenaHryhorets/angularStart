import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdBannerComponent} from "./ad-banner.component";
import {AdJobComponent} from "./ad-job.component";
import {AdProfileComponent} from "./ad-profile.component";
import {AdvertisementsComponent} from "./advertisements.component";
import {AdDirective} from "./ad.directive";



@NgModule({
  declarations: [
    AdBannerComponent,
    AdJobComponent,
    AdProfileComponent,
    AdvertisementsComponent,
    AdDirective
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [ AdJobComponent, AdProfileComponent ],
  exports: [
    AdvertisementsComponent
  ]
})
export class AdModule { }
