import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP9Component } from './funfacts-p9.component';

describe('FunFactsP9Component', () => {
  let component: FunFactsP9Component;
  let fixture: ComponentFixture<FunFactsP9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP9Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
