import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetectiveP2Component } from './artDetective-p2.component';

describe('ArtDetectiveComponent', () => {
  let component: ArtDetectiveP2Component;
  let fixture: ComponentFixture<ArtDetectiveP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDetectiveP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDetectiveP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
