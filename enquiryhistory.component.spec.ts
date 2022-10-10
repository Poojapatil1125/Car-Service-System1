import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryhistoryComponent } from './enquiryhistory.component';

describe('EnquiryhistoryComponent', () => {
  let component: EnquiryhistoryComponent;
  let fixture: ComponentFixture<EnquiryhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
