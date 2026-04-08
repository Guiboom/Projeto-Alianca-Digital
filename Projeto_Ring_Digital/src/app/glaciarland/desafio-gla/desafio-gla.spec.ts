import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioGla } from './desafio-gla';

describe('DesafioGla', () => {
  let component: DesafioGla;
  let fixture: ComponentFixture<DesafioGla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafioGla],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioGla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
