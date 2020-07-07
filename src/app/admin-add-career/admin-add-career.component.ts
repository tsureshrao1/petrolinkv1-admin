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
  constructor(private careerService:CareerAdminService) {
    console.log("InsideConstructor");
    this.career = new career();
  }

  ngOnInit(): void {
    
  }

  createCareer(): void {
    this.careerService.createCareer(this.career).subscribe( data => {
      this.message = "Created Job Successfully";
      this.career.id = "";
      this.career.jobDescription = "";
      this.career.jobSummary = "";
      this.career.role = "";
    });
  }

}
