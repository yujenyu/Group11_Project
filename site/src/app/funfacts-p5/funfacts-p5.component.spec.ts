import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP5Component } from './funfacts-p5.component';

describe('FunFactsP5Component', () => {
  let component: FunFactsP5Component;
  let fixture: ComponentFixture<FunFactsP5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP5Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
