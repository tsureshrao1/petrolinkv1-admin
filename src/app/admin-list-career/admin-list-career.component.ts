import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { career } from '../model/career';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-career',
  templateUrl: './admin-list-career.component.html',
  styleUrls: ['./admin-list-career.component.css']
})
export class AdminListCareerComponent implements OnInit {

  career: career;
  careers: Array<career>;
  message: String;
  config: any;
  selectedDate;
  applicants:applyJob[];

  constructor(private careerService:CareerAdminService,private router:Router) { }

  ngOnInit(): void {
    this.getJobOpenings();
  }

  deleteCareer(career){
    console.log(career.id);
    this.careerService.deleteCareer(career).subscribe( data => {
      this.getJobOpenings();
    });
  }

  getJobOpenings(){
    this.careerService.getJopOpenings().subscribe((data) => {
      this.careers = data;
      console.log(this.careers.length);
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.careers.length
      };
    });
  }
}

export class applyJob{
  id:any;
  careerId:any;
  name:String;
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
