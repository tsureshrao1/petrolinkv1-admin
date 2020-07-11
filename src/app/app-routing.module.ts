import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddCareerComponent } from './admin-add-career/admin-add-career.component';
import { AdminListCareerComponent } from './admin-list-career/admin-list-career.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';
import { AdminCareerApplicantsComponent } from './admin-career-applicants/admin-career-applicants.component';
import { AdminCareerApplicantDetailsComponent } from './admin-career-applicant-details/admin-career-applicant-details.component';


const routes: Routes = [
  {path:'adminhome',component:AdminHomeComponent,canActivate: [AuthGuard]},
  {path:'addjob',component:AdminAddCareerComponent,canActivate: [AuthGuard]},
  {path:'getJobsList',component:AdminListCareerComponent,canActivate: [AuthGuard]},
  {path:'getCareerApplicants/:id',component:AdminCareerApplicantsComponent,canActivate: [AuthGuard]},
  {path:'getCareerApplicant/:careerId/:applicantId',component:AdminCareerApplicantDetailsComponent,canActivate: [AuthGuard]},
  {path:'',component:AdminLoginComponent},
  {path:'**',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminAddCareerComponent,AdminListCareerComponent]
