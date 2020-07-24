import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectApplicantDetailComponent } from './admin-direct-applicant-detail.component';

describe('AdminDirectApplicantDetailComponent', () => {
  let component: AdminDirectApplicantDetailComponent;
  let fixture: ComponentFixture<AdminDirectApplicantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirectApplicantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirectApplicantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
