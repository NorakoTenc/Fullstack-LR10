import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BernkastelComponentComponent } from './bernkastel-component.component';

describe('BernkastelComponentComponent', () => {
  let component: BernkastelComponentComponent;
  let fixture: ComponentFixture<BernkastelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BernkastelComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BernkastelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
