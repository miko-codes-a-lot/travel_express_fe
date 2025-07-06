import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDetails } from './route-details';

describe('RouteDetails', () => {
  let component: RouteDetails;
  let fixture: ComponentFixture<RouteDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
