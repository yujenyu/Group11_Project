import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP7Component } from './funfacts-p7.component';

describe('FunFactsP7Component', () => {
  let component: FunFactsP7Component;
  let fixture: ComponentFixture<FunFactsP7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP7Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
