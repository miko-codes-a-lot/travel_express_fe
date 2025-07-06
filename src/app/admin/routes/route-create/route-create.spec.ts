import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCreate } from './route-create';

describe('RouteCreate', () => {
  let component: RouteCreate;
  let fixture: ComponentFixture<RouteCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
