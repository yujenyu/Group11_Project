import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP6Component } from './funfacts-p6.component';

describe('FunFactsP6Component', () => {
  let component: FunFactsP6Component;
  let fixture: ComponentFixture<FunFactsP6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP6Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
