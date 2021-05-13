import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineP1Component } from './timeline-p1.component';

describe('TimelineP1Component', () => {
  let component: TimelineP1Component;
  let fixture: ComponentFixture<TimelineP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
