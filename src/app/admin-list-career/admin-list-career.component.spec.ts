import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListCareerComponent } from './admin-list-career.component';

describe('AdminListCareerComponent', () => {
  let component: AdminListCareerComponent;
  let fixture: ComponentFixture<AdminListCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
