import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCareerApplicantsComponent } from './admin-career-applicants.component';

describe('AdminCareerApplicantsComponent', () => {
  let component: AdminCareerApplicantsComponent;
  let fixture: ComponentFixture<AdminCareerApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCareerApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCareerApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
