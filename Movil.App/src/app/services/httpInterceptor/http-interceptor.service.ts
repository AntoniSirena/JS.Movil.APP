import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NetworkConnectionService } from '../networkConnection/network-connection.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  token: string;
  coreURL: string;

  constructor(
    private networkConnectionService: NetworkConnectionService,
  ) {
    this.coreURL = environment.coreURL;
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = JSON.parse(localStorage.getItem('token')) || '';

    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');

    if (req.url.match("login")) {

    } else {
      headers = headers.append('Authorization', `${this.token}`);
    }

    this.networkConnectionService.getNetworkStatus();

    const reqclone = req.clone({
      headers
    });

    return next.handle(reqclone).pipe(
      tap((resp: HttpEvent<any>) => {
        if (resp instanceof HttpResponse) {

        }
      }, (error: any) => {
        if (error instanceof HttpErrorResponse) {

        }
      })
    );

  }


}
