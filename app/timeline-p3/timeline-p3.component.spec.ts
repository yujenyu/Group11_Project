import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineP3Component } from './timeline-p3.component';

describe('TimelineP3Component', () => {
  let component: TimelineP3Component;
  let fixture: ComponentFixture<TimelineP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
