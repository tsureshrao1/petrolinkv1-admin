import { Component, OnInit } from '@angular/core';
import { user } from '../admin-login/admin-login.component';
import { CareerAdminService } from '../career-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {
  user:user;
  message:String = "";
  errorMessage:String = "";
  userNameMessage:boolean = false;
  passwordMessage:boolean = false;
  emailMessage:boolean = false;
  loading:boolean = false;
  constructor(private careerService:CareerAdminService,private router:Router) {
    this.user = new user();
    this.user.userName = '';
    this.user.password = '';
    this.user.email = '';
  }

  ngOnInit(): void {
  }

  createUser(){
    if(this.user.userName == '' || this.user.password == ''){
      console.log(this.user);
      this.errorMessage = "Please Fill all the fields*"
    }else if(this.user.userName.length < 5){
      this.userNameMessage = true;
      this.passwordMessage = false;
      this.emailMessage = false;
    }else if(this.user.password.length < 5){
      this.userNameMessage = false;
      this.passwordMessage = true;
      this.emailMessage = false;
    }/*else if(this.user.email.length < 5){
      this.userNameMessage = false;
      this.passwordMessage = false;
      this.emailMessage = true;
    }*/else{
      this.loading = true;
      this.careerService.addAdminUser(this.user).subscribe((data)=>{
        if(data != null && data != ""){
          this.user = data;
          this.message = "User Created Successfully."
          this.user.userName = '';
          this.user.password = '';
          this.user.email = '';
          this.loading = false;
        }else{
          this.loading = false;
          this.message = "Issue while creating User";
        }
      });
    }
  }

}
