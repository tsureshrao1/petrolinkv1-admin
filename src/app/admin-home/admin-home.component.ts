import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  addCareer:boolean=false;
  careerList:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.addCareer = true;
    $(document).ready(function(){
			$('#sidebarCollapse').on('click',function(){
				$('#sidebar').toggleClass('active');
			});
    });
  }

  logOut(){
    localStorage.removeItem("currentUser");
    this.router.navigate(["/"])
  }

  enableTemplate(divName){
    if(divName=="addjob"){
      this.addCareer=true;
      this.careerList=false;
    }else if(divName=="getJobsList"){
      this.addCareer=false;
      this.careerList=true;
    }
  }

}
