import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CareerAdminService } from '../career-admin.service';
import { applyJob } from '../admin-list-career/admin-list-career.component';
import { career } from '../model/career';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admin-career-applicants',
  templateUrl: './admin-career-applicants.component.html',
  styleUrls: ['./admin-career-applicants.component.css']
})
export class AdminCareerApplicantsComponent implements OnInit {
  applicants:applyJob[];
  careers: Array<career>;
  message: String;
  careerId: any;
  blob: Blob;
  constructor(private careerService:CareerAdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.careerId = this.route.snapshot.paramMap.get('id');
    this.loadApplicants(this.careerId);
  }

  loadApplicants(careerId){
    this.careerService.getApplicants(careerId).subscribe((data) => {
      if(data != null && data.length > 0){
        this.applicants = data;
        this.careers = null;
        this.message = null;
      }else{
        this.message = "No Applicants Found";
      }
    });
  }

  getApplicantsResume(applicant){
    this.careerService.getResumeDownload(this.careerId,applicant.id).subscribe((datas) => {
      saveAs(new Blob([datas]));
      //this.blob = new Blob([datas]);
      //var downloadURL = window.URL.createObjectURL(datas);
      //console.log(downloadURL);
      //applicant.downloadLink = downloadURL;
    });
  }

}
