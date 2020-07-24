import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CareerAdminService } from '../career-admin.service';
import { career } from '../model/career';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admin-direct-applicants',
  templateUrl: './admin-direct-applicants.component.html',
  styleUrls: ['./admin-direct-applicants.component.css']
})
export class AdminDirectApplicantsComponent implements OnInit {

  applicantId : any;
  data : any;
  applicants:applyDirectJob[];
  applicant : any;
  message: String;
  blob: Blob;
  config:any;
  loading:boolean=false;
  filterText:any='';

  constructor(private careerService:CareerAdminService,private router:Router,private route:ActivatedRoute) {
    this.applicantId = this.route.snapshot.paramMap.get('applicantId');
   }

  ngOnInit(): void {
    this.loadApplicants();
  }

  expandApplication(){
    if(this.applicants != null && this.applicants.length > 0){
      console.log(this.applicants.length)
      for(let i=0;i<this.applicants.length;i++){
        console.log(this.applicants[i]);
        if(this.applicants[i].id == this.applicantId){

          this.applicant = this.applicants[i];
          console.log(this.applicant);
          this.loading = true;
          break;
        }
      }
    }
  }

  loadApplicants(){
    this.loading = true;
    this.careerService.getDirectApplicants().subscribe((data) => {
      if(data != null && data.length > 0){
        this.applicants = data;
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.applicants.length
        };
        this.message = null;
        this.loading = false;
      }else{
        this.message = "No Applicants Found";
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
