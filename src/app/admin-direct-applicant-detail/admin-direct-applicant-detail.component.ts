import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admin-direct-applicant-detail',
  templateUrl: './admin-direct-applicant-detail.component.html',
  styleUrls: ['./admin-direct-applicant-detail.component.css']
})
export class AdminDirectApplicantDetailComponent implements OnInit {

  applicant: applyDirectJob;
  applicantId: any;
  loading:boolean=false;
  downloading:boolean=false;
  message: any;

  constructor(private careerService:CareerAdminService,private router:Router,private route:ActivatedRoute) { 
    
    
  }

  ngOnInit(): void {
    this.applicantId = this.route.snapshot.paramMap.get('applicantId');
    console.log("log "+this.applicantId);
    this.loadApplicantDetails(this.applicantId);
  }

  loadApplicantDetails(applicantId){
    this.loading=true;
    this.careerService.getDirectApplicant(this.applicantId).subscribe((data) => {
      if(data != null){
        this.applicant = data;
        console.log(this.applicant);
        this.loading = false;
        
      }else{
        this.message = "No Details found for this applicant...";
        this.loading = false;
      }
    });
  }

  getApplicantsResume(applicant){
    let fileName:string = null;
    let contentDisposition = null;
    //this.careerService.getResumeDownload(this.careerId,applicant.id);
    this.careerService.getDirectResumeDownload(applicant.id).subscribe((datas) => {

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
    });
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

