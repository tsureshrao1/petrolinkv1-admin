import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { career } from './model/career';

@Injectable({
  providedIn: 'root'
})

export class CareerAdminService {
  HOST_NAME = "http://167.99.153.42:8080/petrolinkboot/";
  JOB_URL = "petrolink/career";
  LOGIN = "petrolink/admin/user";
  GET_APPLICATION = "petrolink/profile/career/";
  DOWNLOAD_FILE   = "petrolink/profile/download/";
  constructor(private httpClient:HttpClient) { }

  login(data):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+this.LOGIN,data).pipe();
  }

  getJopOpenings():Observable<any>{
    return this.httpClient.get<career>(this.HOST_NAME+this.JOB_URL).pipe();
  }

  createCareer(postJob){
    return this.httpClient.post<career>(this.HOST_NAME+this.JOB_URL,postJob).pipe();
  }

  deleteCareer(deleteJob){
    return this.httpClient.delete<career>(this.HOST_NAME+this.JOB_URL+"/"+ deleteJob.id);
  }

  getApplicants(careerId){
    return this.httpClient.get<any>(this.HOST_NAME+this.GET_APPLICATION+careerId);
  }

  getResumeDownload(careerId,applicantId){
    const httpOptions = {
      responseType: 'blob' as 'json'
    }
    return this.httpClient.get<any>(this.HOST_NAME+this.DOWNLOAD_FILE+"P_"+careerId+"_"+applicantId+"_",httpOptions).pipe();
  }

}
