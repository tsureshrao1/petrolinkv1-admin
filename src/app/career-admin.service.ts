import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { career } from './model/career';

@Injectable({
  providedIn: 'root'
})

export class CareerAdminService {
  HOST_NAME = "http://167.99.153.42:8080/petrolinkboot/";
  JOB_URL = "petrolink/career";
  JOB_URL_DEACTIVATED = "petrolink/career/deactive";
  LOGIN = "petrolink/admin/user/login";
  GET_APPLICATION = "petrolink/profile/career/";
  DOWNLOAD_FILE   = "petrolink/profile/download/";
  ADD_ADMIN_USER = "petrolink/admin/user";
  constructor(private httpClient:HttpClient) { }

  login(data):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+this.LOGIN,data).pipe();
  }

  getDeactivatedJobs():Observable<any>{
    return this.httpClient.get<career>(this.HOST_NAME+this.JOB_URL_DEACTIVATED).pipe();
  }

  getJopOpenings():Observable<any>{
    return this.httpClient.get<career>(this.HOST_NAME+this.JOB_URL).pipe();
  }

  createCareer(postJob){
    return this.httpClient.post<career>(this.HOST_NAME+this.JOB_URL,postJob).pipe();
  }

  updateCareer(updateJob){
    return this.httpClient.put<career>(this.HOST_NAME+this.JOB_URL,updateJob).pipe();
  }

  deleteCareer(deleteJob){
    return this.httpClient.delete<career>(this.HOST_NAME+this.JOB_URL+"/"+ deleteJob.id);
  }

  getApplicants(careerId){
    return this.httpClient.get<any>(this.HOST_NAME+this.GET_APPLICATION+careerId);
  }

  getResumeDownload(careerId,applicantId){
    const httpOptions = {
      responseType: 'blob' as 'json',
    }
    console.log(this.HOST_NAME+this.DOWNLOAD_FILE+"P_"+careerId+"_"+applicantId+"_");
    /*this.httpClient.get(this.HOST_NAME+this.DOWNLOAD_FILE+"P_"+careerId+"_"+applicantId+"_",{observe: 'response', responseType: 'blob'}).subscribe(resp => {
      console.log(resp.headers.get('Content-Disposition'));
      console.log(resp);
    });*/
    return this.httpClient.get(this.HOST_NAME+this.DOWNLOAD_FILE+"P_"+careerId+"_"+applicantId+"_",{observe: 'response', responseType: 'blob'});
  }

  addAdminUser(user){
    return this.httpClient.post<any>(this.HOST_NAME+this.ADD_ADMIN_USER,user).pipe();
  }

}
