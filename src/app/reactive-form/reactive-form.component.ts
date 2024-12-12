import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule], // Підключення ReactiveFormsModule
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Ініціалізація вкладених FormGroup
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
      }),
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      }),
    });
  }

  // Метод для оновлення значень форми
  updateFormValues() {
    this.form.setValue({
      personalInfo: {
        firstName: 'Updated First Name',
        lastName: 'Updated Last Name',
      },
      contactInfo: {
        email: 'updated@example.com',
        phone: '123456789',
      },
    });
  }

  // Геттер для зручного доступу до полів
  get personalInfo() {
    return this.form.get('personalInfo') as FormGroup;
  }

  get contactInfo() {
    return this.form.get('contactInfo') as FormGroup;
  }

  // Метод для отримання стану валідності форми
  getFormValidationState() {
    return this.form.valid ? 'Valid' : 'Invalid';
  }
}
