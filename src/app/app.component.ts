import { Component, OnInit } from '@angular/core';
import { career } from './model/career';
import { CareerAdminService } from './career-admin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  career: career;
  careers: Array<career>;
  message: String;
  config: any;
  selectedDate;
  constructor(private careerService:CareerAdminService){

  }

  ngOnInit(): void {
  }

  title = 'petrolink-admin';
}
