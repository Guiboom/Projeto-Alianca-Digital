import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoGla } from './situacao-gla';

describe('SituacaoGla', () => {
  let component: SituacaoGla;
  let fixture: ComponentFixture<SituacaoGla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacaoGla],
    }).compileComponents();

    fixture = TestBed.createComponent(SituacaoGla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
