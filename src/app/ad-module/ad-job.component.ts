import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="ad-job">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class AdJobComponent implements AdComponent {

  @Input() data: any;

}
