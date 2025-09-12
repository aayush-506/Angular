import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeBarDashboard } from './grade-bar-dashboard';

describe('GradeBarDashboard', () => {
  let component: GradeBarDashboard;
  let fixture: ComponentFixture<GradeBarDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeBarDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeBarDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
