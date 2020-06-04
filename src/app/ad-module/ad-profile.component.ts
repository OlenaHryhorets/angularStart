import { Component, Input }  from '@angular/core';
import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="ad-profile">
      <h3>Featured Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class AdProfileComponent implements AdComponent {

  @Input() data: any;

}
