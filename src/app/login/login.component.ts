import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestOptionsArgs, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mvs_uname: string = "jsmith";
  mvs_pass: string = "PasSword#1234";
  username:string;
  password:string;
  userAuthString:string = "Basic " + btoa(this.mvs_uname + ":" + this.mvs_pass);
  headersType: Headers;
  APP_REST_URL = "http://192.168.10.148:5555/rest/DeviceAnalytics/webservices/restResources";
  LOGIN_SERVICE_PATH = "/authentication/userLogin";
  headersRequest: RequestOptionsArgs;
  authenticated: boolean = false;

  @Output()
  authenticate = new EventEmitter();

  constructor(private http: HttpClient, private router: Router,private noti:NotificationService) { 
  
  //   const headers = new Headers();
  //   headers.append('Authorization',this.userAuthString); 
  //   const options = new RequestOptions({headers: headers})

  // this.headersType.append("Authorization",this.userAuthString); 
  
  //   this.headersRequest = {
  //   headers : this.headersType
  //   };
   }
  ngOnInit() {
  }

  userAuthenticate(){
    this.http.post(this.APP_REST_URL + this.LOGIN_SERVICE_PATH,{
      "userId": this.username,
      "password": this.password
  },{}).subscribe(val => {
    if(val) {
      this.authenticated = true;
      this.noti.notify();
      this.authenticate.emit(this.authenticated);
      this.router.navigate(['dashboard']);
    }
  });
  }
  
}
