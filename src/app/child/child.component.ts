import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child',
  template: `
    <h3>Дочірній компонент</h3>
    <p>Повідомлення від батьківського компонента: {{ message }}</p>
  `,
})
export class ChildComponent {
  @Input() message = '';
}
