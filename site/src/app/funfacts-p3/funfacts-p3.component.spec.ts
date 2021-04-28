import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP3Component } from './funfacts-p3.component';

describe('FunFactsP3Component', () => {
  let component: FunFactsP3Component;
  let fixture: ComponentFixture<FunFactsP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP3Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
