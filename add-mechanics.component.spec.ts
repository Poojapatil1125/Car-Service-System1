import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMechanicsComponent } from './add-mechanics.component';

describe('AddMechanicsComponent', () => {
  let component: AddMechanicsComponent;
  let fixture: ComponentFixture<AddMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMechanicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
