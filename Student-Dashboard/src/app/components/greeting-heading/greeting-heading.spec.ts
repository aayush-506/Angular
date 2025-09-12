import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingHeading } from './greeting-heading';

describe('GreetingHeading', () => {
  let component: GreetingHeading;
  let fixture: ComponentFixture<GreetingHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
