import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsidebarComponent } from './loginsidebar.component';

describe('LoginsidebarComponent', () => {
  let component: LoginsidebarComponent;
  let fixture: ComponentFixture<LoginsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
