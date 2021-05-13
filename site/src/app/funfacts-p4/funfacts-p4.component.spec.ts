import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP4Component } from './funfacts-p4.component';

describe('FunFactsP4Component', () => {
  let component: FunFactsP4Component;
  let fixture: ComponentFixture<FunFactsP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP4Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
