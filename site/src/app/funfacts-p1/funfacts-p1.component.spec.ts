import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP1Component } from './funfacts-p1.component';

describe('FunFactsP1Component', () => {
  let component: FunFactsP1Component;
  let fixture: ComponentFixture<FunFactsP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
