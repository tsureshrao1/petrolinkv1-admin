import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCareerApplicantDetailsComponent } from './admin-career-applicant-details.component';

describe('AdminCareerApplicantDetailsComponent', () => {
  let component: AdminCareerApplicantDetailsComponent;
  let fixture: ComponentFixture<AdminCareerApplicantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCareerApplicantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCareerApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
