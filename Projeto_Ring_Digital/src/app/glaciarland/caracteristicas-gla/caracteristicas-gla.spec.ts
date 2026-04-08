import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasGla } from './caracteristicas-gla';

describe('CaracteristicasGla', () => {
  let component: CaracteristicasGla;
  let fixture: ComponentFixture<CaracteristicasGla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasGla],
    }).compileComponents();

    fixture = TestBed.createComponent(CaracteristicasGla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
