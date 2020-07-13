import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CareerAdminService } from '../career-admin.service';
import { applyJob } from '../admin-list-career/admin-list-career.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admin-career-applicant-details',
  templateUrl: './admin-career-applicant-details.component.html',
  styleUrls: ['./admin-career-applicant-details.component.css']
})
export class AdminCareerApplicantDetailsComponent implements OnInit {
  applicantId : any;
  careerId : any;
  applicant:applyJob;
  message:String;
  loading:boolean=false;
  downloading:boolean=false;
  constructor(private careerService:CareerAdminService,private router:Router,private route:ActivatedRoute) { 
    this.applicantId = this.route.snapshot.paramMap.get('applicantId');
    this.careerId = this.route.snapshot.paramMap.get('careerId');
  }

  ngOnInit(): void {
    console.log(this.applicantId);
    this.loadApplicantDetails(this.careerId);
  }


  loadApplicantDetails(careerId){
    this.loading=true;
    this.careerService.getApplicants(careerId).subscribe((data) => {
      if(data != null && data.length > 0){
        for(let i=0;i<data.length;i++){
          console.log(data[i]);
          if(data[i].id == this.applicantId){

            this.applicant = data[i];
            console.log(this.applicant);
            this.loading = false;
            break;
          }
        }
      }else{
        this.message = "No Details found for this applicant...";
        this.loading = false;
      }
    });
  }

  downloadResume(){
    this.downloading = true;
    let fileName:string = null;
    let contentDisposition = null;
    //this.careerService.getResumeDownload(this.careerId,applicant.id);
    this.careerService.getResumeDownload(this.careerId,this.applicantId).subscribe((datas) => {

      if(datas != null && datas.body != null && datas.headers != null){
        contentDisposition = datas.headers.get('Content-Disposition');
        if(contentDisposition == null){
          contentDisposition = 'attachment; filename="Resume.docx"';
        }
        contentDisposition = contentDisposition.substr(contentDisposition.lastIndexOf(';')+1)
        fileName = contentDisposition.substr(contentDisposition.lastIndexOf('=')+1)
        fileName = fileName.replace(/^"|"$/g, '');
        const EXT = fileName.substr(fileName.lastIndexOf('.')+1);
        console.log(EXT);
        saveAs(new Blob([datas.body],{type:EXT}),fileName);
      }
      this.downloading = false;
    });
  }

}
