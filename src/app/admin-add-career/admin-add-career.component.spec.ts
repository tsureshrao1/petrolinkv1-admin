import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCareerComponent } from './admin-add-career.component';

describe('AdminAddCareerComponent', () => {
  let component: AdminAddCareerComponent;
  let fixture: ComponentFixture<AdminAddCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
