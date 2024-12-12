import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-parent',
  template: `
    <h2>Батьківський компонент</h2>
    <input [(ngModel)]="parentMessage" placeholder="Введіть повідомлення для дочірнього компонента">
    <app-child [message]="parentMessage"></app-child>
  `,
  imports: [ChildComponent, FormsModule],
})
export class ParentComponent {
  parentMessage = 'Привіт від батьківського компонента!';
}
