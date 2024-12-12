import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { reusableShakeAnimation } from '../animations/animations';

@Component({
  selector: 'app-lambdadelta-component',
  templateUrl: './lambdadelta-component.component.html',
  styleUrls: ['./lambdadelta-component.component.css'],
  animations: [reusableShakeAnimation],
})
export class LambdadeltaComponentComponent {
  animationState = '';

  triggerShake() {
    this.animationState = 'shake';
    setTimeout(() => (this.animationState = ''), 500); // Скидаємо стан для повторного використання
  }
}