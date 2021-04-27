import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP2Component } from './funfacts-p2.component';

describe('FunFactsP2Component', () => {
  let component: FunFactsP2Component;
  let fixture: ComponentFixture<FunFactsP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP2Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
