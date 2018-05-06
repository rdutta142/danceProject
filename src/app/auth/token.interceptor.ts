import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  mvs_uname: string = "jsmith";
  mvs_pass: string = "PasSword#1234";
  encodedString: string;
  constructor(public auth: AuthService) {
    this.encodedString = btoa(this.mvs_uname + ":" + this.mvs_pass)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `${this.encodedString}`
      }
    });

    return next.handle(request);
  }
}