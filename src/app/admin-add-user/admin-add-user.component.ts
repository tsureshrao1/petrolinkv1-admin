import { Component, OnInit } from '@angular/core';
import { user } from '../admin-login/admin-login.component';
import { CareerAdminService } from '../career-admin.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {
  user: user;
  userList: Array<user>;
  config: any;
  applicants: applyDirectJob[];
  applicant: any;
  message: String = "";
  errorMessage: String = "";
  userNameMessage: boolean = false;
  passwordMessage: boolean = false;
  emailMessage: boolean = false;
  loading: boolean = false;
  constructor(private careerService: CareerAdminService, private router: Router) {
    this.user = new user();
    this.user.userName = '';
    this.user.password = '';
    this.user.email = '';
    //this.user.changePassword = '';
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  createUser() {
    if (this.user.userName == '' || this.user.password == '') {
      console.log(this.user);
      this.errorMessage = "Please Fill all the fields*"
    } else if (this.user.userName.length < 5) {
      this.userNameMessage = true;
      this.passwordMessage = false;
      this.emailMessage = false;
    } else if (this.user.password.length < 5) {
      this.userNameMessage = false;
      this.passwordMessage = true;
      this.emailMessage = false;
    }/*else if(this.user.email.length < 5){
      this.userNameMessage = false;
      this.passwordMessage = false;
      this.emailMessage = true;
    }*/else {
      this.loading = true;
      this.careerService.addAdminUser(this.user).subscribe((data) => {
        if (data != null && data != "") {
          this.user = data; console.log(data);
          this.message = "User Created Successfully."
          this.user.userName = '';
          this.user.password = '';
          this.user.email = '';
          this.loading = false;
          this.getUserDetails();
        } else {
          this.loading = false;
          this.message = "Issue while creating User";
        }
      });
      $("#Modal_Add_User").modal("hide");
    }

  }
  loadApplicants() {
    this.loading = true;
    this.careerService.getDirectApplicants().subscribe((data) => {
      if (data != null && data.length > 0) {
        this.applicants = data;
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.applicants.length
        };
        this.message = null;
        this.loading = false;
      } else {
        this.message = "No Applicants Found";
        this.loading = false;
      }
    });
  }
  deleteUser(userId) {
    this.careerService.deleteUsers(userId).subscribe(data => {
      this.applicants = null;
      this.loadApplicants();
      this.getUserDetails();
      $("#UserdeleteConfirmation_" + userId).modal("hide");
    });
  }

  removeModal(userId) {
    $("#UserdeleteConfirmation_" + userId).modal("hide");
  }

  getUserDetails() {
    this.message = ""
    this.loading = true;
    this.careerService.getUsers().subscribe((data) => {
      this.userList = data;
      if (this.userList != null && this.userList.length > 0) {
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.userList.length
        };
        this.loading = false;
      } else {
        this.userList = null;
        this.message = "No Jobs Found"
        this.loading = false;
      }
    });
  }

  editUser(user) {
    if (user.newPassword === undefined && user.confirmPassword === undefined) {
      this.message = "Required Password";
    } else {

      if (user.newPassword === user.confirmPassword) {
        user.password = user.newPassword;
        this.careerService.updateUser(user).subscribe(data => {
          this.message = "Updated User Successfully";
          this.getUserDetails();
        });
        $("#Modal_Edit_User" + user.id).modal("hide");
      }
      else {
        user.newPassword = "";
        user.confirmPassword = "";
        this.message = "**Password are not Matching";
      }
    }

  }


}
export class applyDirectJob {
  id: any;
  name: String;
  dateOfbirth: any;
  nationality: String;
  email: String;
  phoneNumber: String;
  mobileNumber: String;
  describeCurrentJob: String;
  expAbroad: String;
  expOthers: String;
  qualifications: String;
  joiningPeriod: String;
  currentSalary: String;
  expSalary: String;
  presentLocation: String;
  downloadLink: String;
}
