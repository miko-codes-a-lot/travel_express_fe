import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voyage } from './voyage';

describe('Voyage', () => {
  let component: Voyage;
  let fixture: ComponentFixture<Voyage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voyage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Voyage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
