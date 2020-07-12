import { Component, OnInit } from '@angular/core';
import { CareerAdminService } from '../career-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginData:user;

  constructor(private careerService:CareerAdminService,private router:Router) {
    this.loginData = new user();
  }

  ngOnInit(): void {
    localStorage.removeItem("currentUser");
  }

  login(){
    this.careerService.login(this.loginData).subscribe((data) => {
      data.password = "*********";
      localStorage.setItem("currentUser",JSON.stringify(data));
      this.router.navigate(["/addjob"]);
    });
  }

}

export class user{
  userName:String;
  password:String;
  email:String;
}
