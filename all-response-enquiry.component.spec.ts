import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResponseEnquiryComponent } from './all-response-enquiry.component';

describe('AllResponseEnquiryComponent', () => {
  let component: AllResponseEnquiryComponent;
  let fixture: ComponentFixture<AllResponseEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResponseEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllResponseEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
