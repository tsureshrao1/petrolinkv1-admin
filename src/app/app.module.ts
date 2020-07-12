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
    AdminHeaderNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
