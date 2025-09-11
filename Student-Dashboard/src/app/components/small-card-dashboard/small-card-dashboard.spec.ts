import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardDashboard } from './small-card-dashboard';

describe('SmallCardDashboard', () => {
  let component: SmallCardDashboard;
  let fixture: ComponentFixture<SmallCardDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCardDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
