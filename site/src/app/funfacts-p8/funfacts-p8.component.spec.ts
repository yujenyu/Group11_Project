import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactsP8Component } from './funfacts-p8.component';

describe('FunFactsP8Component', () => {
  let component: FunFactsP8Component;
  let fixture: ComponentFixture<FunFactsP8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFactsP8Component ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactsP8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
