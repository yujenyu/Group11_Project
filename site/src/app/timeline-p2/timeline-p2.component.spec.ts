import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineP2Component } from './timeline-p2.component';

describe('TimelineP2Component', () => {
  let component: TimelineP2Component;
  let fixture: ComponentFixture<TimelineP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
