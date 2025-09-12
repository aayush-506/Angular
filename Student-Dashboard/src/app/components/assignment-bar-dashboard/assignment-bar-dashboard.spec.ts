import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBarDashboard } from './assignment-bar-dashboard';

describe('AssignmentBarDashboard', () => {
  let component: AssignmentBarDashboard;
  let fixture: ComponentFixture<AssignmentBarDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentBarDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentBarDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
