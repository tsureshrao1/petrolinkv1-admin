import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { career } from '../model/career';

@Component({
  selector: 'app-admin-add-career',
  templateUrl: './admin-add-career.component.html',
  styleUrls: ['./admin-add-career.component.css']
})
export class AdminAddCareerComponent implements OnInit {
  career:career;
  message:String;
  errorMessage:String;
  constructor(private careerService:CareerAdminService) {
    console.log("InsideConstructor");
    this.career = new career();
    this.career.jobDescription = "";
    this.career.jobSummary = "";
    this.career.role = "";
    this.career.location = "";
    this.errorMessage = "";
  }

  ngOnInit(): void {
    
  }


  getJobDescription(description){

  }

  createCareer(): void {

    if(this.career.jobDescription == '' || this.career.jobSummary == '' || this.career.role == '' || this.career.location == ''){
      this.errorMessage = "Please Fill all the fields*"
    }else{
      this.careerService.createCareer(this.career).subscribe( data => {
        this.message = "Created Job Successfully";
        this.errorMessage="";
        this.career.id = "";
        this.career.jobDescription = "";
        this.career.jobSummary = "";
        this.career.role = "";
        this.career.location = "";
      });
    }
  }

}
