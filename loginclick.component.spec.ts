import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginclickComponent } from './loginclick.component';

describe('LoginclickComponent', () => {
  let component: LoginclickComponent;
  let fixture: ComponentFixture<LoginclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
