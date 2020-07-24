import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-direct-applicant-detail',
  templateUrl: './admin-direct-applicant-detail.component.html',
  styleUrls: ['./admin-direct-applicant-detail.component.css']
})
export class AdminDirectApplicantDetailComponent implements OnInit {

  applicant: applyDirectJob;

  constructor() { 
    //this.applicant = this.route.snapshot.paramMap.get('applicant');
    console.log(this.applicant.name);
  }

  ngOnInit(): void {
    console.log(this.applicant.name);
  }

}

export class applyDirectJob{
  id:any;
  name:String ="subbu";
  dateOfbirth:any;
  nationality:String;
  email:String;
  phoneNumber:String;
  mobileNumber:String;
  describeCurrentJob:String;
  expAbroad:String;
  expOthers:String;
  qualifications:String;
  joiningPeriod:String;
  currentSalary:String;
  expSalary:String;
  presentLocation:String;
  downloadLink:String;
}

