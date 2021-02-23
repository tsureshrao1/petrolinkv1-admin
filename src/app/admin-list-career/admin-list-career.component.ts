import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { career } from '../model/career';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin-list-career',
  templateUrl: './admin-list-career.component.html',
  styleUrls: ['./admin-list-career.component.css']
})
export class AdminListCareerComponent implements OnInit {

  career: career;
  careers: Array<career>;
  message: String;
  errorMessage: String;
  config: any;
  selectedDate;
  applicants:applyJob[];
  ifUnActive:boolean=true;
  ifActive:boolean=false;
  loading:boolean=false;

  constructor(private careerService:CareerAdminService,private router:Router) { 
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.getJobOpenings();
    $(document).ready(function(){
      $(function () { $("[data-toggle = 'tooltip']").tooltip(); });
    });
  }

  loadJobList(loadCareers){
    console.log(loadCareers);
    if(loadCareers == 'ifActive'){
      this.ifActive = false;
      this.ifUnActive = true;
      this.getJobOpenings();
    }else if(loadCareers == 'ifUnActive'){
      this.ifActive = true;
      this.ifUnActive = false;
      this.getDeactivatedJobs();
      this.careers = null;
    }
  }

  deleteCareer(career){
    let careerIdLocal = career.id;
    this.careerService.deleteCareer(career).subscribe( data => {
      this.ifActive = true;
      this.ifUnActive = false;
      this.getDeactivatedJobs();
      $("#deleteConfirmation_"+careerIdLocal).modal("hide");
    });
  }

  getJobOpenings(){
    this.message = ""
    this.loading = true;
    this.careerService.getJopOpenings().subscribe((data) => {
      this.careers = data;
      if(this.careers != null && this.careers.length > 0){
        this.config = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.careers.length
        };
        this.loading = false;
      }else{
        this.careers = null;
        this.message = "No Jobs Found"
        this.loading = false;
      }
    });
  }

  getDeactivatedJobs(){
    this.message = ""
    this.loading = true;
    this.careerService.getDeactivatedJobs().subscribe((data) => {
      this.careers = data;
      if(this.careers != null && this.careers.length > 0){
        this.config = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.careers.length
        };
        this.loading = false;
      }else{
        this.loading = false;
        this.message = "No Jobs Found."
        this.careers = null;
      }
    });
  }
  
  updateCareer(career): void {
    console.log(career);
    if(career.jobDescription == '' || career.jobSummary == '' || career.role == '' || career.location == ''){
      this.errorMessage = "Please Fill all the fields*"
    }else{
      this.careerService.updateCareer(career).subscribe( data => {
        this.message = "Updated Job Successfully";
        //this.getJobOpenings();
        if(this.ifActive == true){
          this.loadJobList('ifUnActive');
        }else if(this.ifUnActive == true){
          this.loadJobList('ifActive');
        }
        this.errorMessage="";
        this.message = "";
      });
      $("#Modal_Career_"+career.id).modal("hide");
    }
  }

  removeModal(career){
    $("#deleteConfirmation_"+career.id).modal("hide");
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
