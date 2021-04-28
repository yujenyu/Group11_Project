import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP10Component } from './funfacts-p10.component';

describe('FunFactsP10Component', () => {
  let component: FunFactsP10Component;
  let fixture: ComponentFixture<FunFactsP10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP10Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
