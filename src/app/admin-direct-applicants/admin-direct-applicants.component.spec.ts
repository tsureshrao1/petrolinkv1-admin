import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectApplicantsComponent } from './admin-direct-applicants.component';

describe('AdminDirectApplicantsComponent', () => {
  let component: AdminDirectApplicantsComponent;
  let fixture: ComponentFixture<AdminDirectApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirectApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirectApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
