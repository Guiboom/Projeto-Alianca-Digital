import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasAli } from './caracteristicas-ali';

describe('CaracteristicasAli', () => {
  let component: CaracteristicasAli;
  let fixture: ComponentFixture<CaracteristicasAli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasAli],
    }).compileComponents();

    fixture = TestBed.createComponent(CaracteristicasAli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
