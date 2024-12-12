import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { reusableZoomAnimation } from '../animations/animations';

@Component({
  selector: 'app-bernkastel-component',
  templateUrl: './bernkastel-component.component.html',
  styleUrls: ['./bernkastel-component.component.css'],
  animations: [reusableZoomAnimation],
})
export class BernkastelComponentComponent {
  state = 'normal';

  toggleState() {
    this.state = this.state === 'normal' ? 'zoomed' : 'normal';
  }
}
