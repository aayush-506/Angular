import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCardDashboard } from './large-card-dashboard';

describe('LargeCardDashboard', () => {
  let component: LargeCardDashboard;
  let fixture: ComponentFixture<LargeCardDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeCardDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeCardDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
