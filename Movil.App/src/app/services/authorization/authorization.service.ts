import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from 'src/app/interfaces/Ilogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  coreURL: string;

  constructor(private httpClient: HttpClient) {
    this.coreURL = environment.coreURL;
  }
  
  authenticate(request: Ilogin) {
    let data = JSON.stringify(request);
    return this.httpClient.post(this.coreURL + 'api/login/authenticate', data);
  }

  refreshToken(refreshToken: string) {
    let data = JSON.stringify(refreshToken);
    return this.httpClient.post(this.coreURL + 'api/login/refreshToken', data);
  }

  logOut(value: string) {
    let data = JSON.stringify(value);
    return this.httpClient.post(this.coreURL + 'api/login/logOut', data);
  }

}
