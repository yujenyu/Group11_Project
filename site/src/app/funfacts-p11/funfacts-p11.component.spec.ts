import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP11Component } from './funfacts-p11.component';

describe('FunFactsP11Component', () => {
  let component: FunFactsP11Component;
  let fixture: ComponentFixture<FunFactsP11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP11Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
