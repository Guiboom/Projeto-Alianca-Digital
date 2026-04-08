import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioAli } from './desafio-ali';

describe('DesafioAli', () => {
  let component: DesafioAli;
  let fixture: ComponentFixture<DesafioAli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafioAli],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioAli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
