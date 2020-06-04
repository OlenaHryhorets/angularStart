import { Injectable } from '@angular/core';
import {AdProfileComponent} from "./ad-profile.component";
import {AdJobComponent} from "./ad-job.component";
import {AdItem} from "./ad-item";

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(AdProfileComponent, {name: 'Mirchenzo', bio: 'Brave as they come'}),

      new AdItem(AdProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(AdJobComponent,   {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),

      new AdItem(AdJobComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
