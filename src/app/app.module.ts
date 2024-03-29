import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAddCareerComponent } from './admin-add-career/admin-add-career.component';
import { AdminListCareerComponent } from './admin-list-career/admin-list-career.component';
import { AdminCareerApplicantsComponent } from './admin-career-applicants/admin-career-applicants.component';
import { TruncatePipe } from './app.pipe';
import { AdminCareerApplicantDetailsComponent } from './admin-career-applicant-details/admin-career-applicant-details.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminHeaderNavComponent } from './admin-header-nav/admin-header-nav.component';
import { ApplicantFilterPipe } from './applicant-filter.pipe';
import { AdminDirectApplicantsComponent } from './admin-direct-applicants/admin-direct-applicants.component';
import { AdminDirectApplicantDetailComponent } from './admin-direct-applicant-detail/admin-direct-applicant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminAddCareerComponent,
    AdminListCareerComponent,
    routingComponents,
    AdminCareerApplicantsComponent,
    TruncatePipe,
    AdminCareerApplicantDetailsComponent,
    AdminAddUserComponent,
    AdminHeaderNavComponent,
    ApplicantFilterPipe,
    AdminDirectApplicantsComponent,
    AdminDirectApplicantDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    UiSwitchModule,
    
  ],
  providers: [AdminHeaderNavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
