import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdadeltaComponentComponent } from './lambdadelta-component.component';

describe('LambdadeltaComponentComponent', () => {
  let component: LambdadeltaComponentComponent;
  let fixture: ComponentFixture<LambdadeltaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LambdadeltaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LambdadeltaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
