import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetectiveP1Component } from './artDetective-p1.component';

describe('ArtDetectiveComponent', () => {
  let component: ArtDetectiveP1Component;
  let fixture: ComponentFixture<ArtDetectiveP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDetectiveP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDetectiveP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
