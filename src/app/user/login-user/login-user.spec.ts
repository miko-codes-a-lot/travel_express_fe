import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUser } from './login-user';

describe('LoginUser', () => {
  let component: LoginUser;
  let fixture: ComponentFixture<LoginUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
