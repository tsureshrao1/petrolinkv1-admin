import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header-nav',
  templateUrl: './admin-header-nav.component.html',
  styleUrls: ['./admin-header-nav.component.css']
})
export class AdminHeaderNavComponent implements OnInit {

  addCareer:boolean=false;
  careerList:boolean=false;
  addUser:boolean=false;

  loggedOut:boolean=false;

  constructor(private router:Router) { 
    console.log(localStorage.getItem('currentUser'));
    /*if(localStorage.getItem('currentUser') == null){
      this.loggedOut = true;
    }*/
  }

  ngOnInit(): void {
    
  }

  logOut(){
    localStorage.removeItem("currentUser");
    this.router.navigate([""])
  }

  enableTemplate(divName){
    if(divName=="addjob"){
      this.addCareer=true;
      this.careerList=false;
      this.addUser=false;
    }else if(divName=="getJobsList"){
      this.addCareer=false;
      this.careerList=true;
      this.addUser=false;
    }else if(divName=="addUser"){
      this.addCareer=false;
      this.careerList=false;
      this.addUser=true;
    }
  }

}
