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
  config:any;
  loading:boolean=false;
  filterText:any='';
  constructor(private careerService:CareerAdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.careerId = this.route.snapshot.paramMap.get('id');
    this.loadApplicants(this.careerId);
  }

  loadApplicants(careerId){
    this.loading = true;
    this.careerService.getApplicants(careerId).subscribe((data) => {
      if(data != null && data.length > 0){
        this.applicants = data;
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.applicants.length
        };
        this.careers = null;
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
    this.careerService.getResumeDownload(this.careerId,applicant.id).subscribe((datas) => {

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
