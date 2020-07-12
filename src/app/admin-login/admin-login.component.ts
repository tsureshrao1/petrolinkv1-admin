import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { Router } from '@angular/router';
import { AdminHeaderNavComponent } from '../admin-header-nav/admin-header-nav.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginData:user;
  message:String;

  constructor(private careerService:CareerAdminService,private router:Router) {
    this.loginData = new user();
  }

  ngOnInit(): void {
    localStorage.removeItem("currentUser");
  }

  login(){
    this.careerService.login(this.loginData).subscribe((data) => {
      if(data != null){
        data.password = "*********";
        localStorage.setItem("currentUser",JSON.stringify(data));
        this.router.navigate(["/addjob"]);
      }else{
        this.message = "Login Issue";
      }
    });
  }

}

export class user{
  userName:String;
  password:String;
  email:String;
}
