import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfoCard } from './my-info-card';

describe('MyInfoCard', () => {
  let component: MyInfoCard;
  let fixture: ComponentFixture<MyInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
