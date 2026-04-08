import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoAli } from './situacao-ali';

describe('SituacaoAli', () => {
  let component: SituacaoAli;
  let fixture: ComponentFixture<SituacaoAli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacaoAli],
    }).compileComponents();

    fixture = TestBed.createComponent(SituacaoAli);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
