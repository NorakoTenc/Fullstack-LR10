import { Component } from '@angular/core';
import { LambdadeltaComponentComponent } from "./lambdadelta-component/lambdadelta-component.component";
import { BernkastelComponentComponent } from "./bernkastel-component/bernkastel-component.component";
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LambdadeltaComponentComponent, BernkastelComponentComponent, RouterOutlet, ReactiveFormComponent]
})
export class AppComponent {
  title = 'LR9';

  onClick() {
    alert('Кнопка натиснута!');
  }
}
