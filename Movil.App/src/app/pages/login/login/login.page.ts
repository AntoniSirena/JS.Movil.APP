import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from 'src/app/interfaces/Ilogin';
import { Iresponse } from 'src/app/interfaces/Iresponse';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { channel } from './../../../configurations/channel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  
  constructor(
    private form: FormBuilder,
    private authorizationService: AuthorizationService,
  ) { }

  ngOnInit() {
    this.initLoginform();
  }

  login(form: any) {

    const data: Ilogin = {
      UserName: form.userName,
      Password: form.password,
      EmailAddress: '',
      SecurityCode: '',
      Token2AF: '',
      RefreshToken: false,
      Channel: channel.movil,
    };

    this.authorizationService.authenticate(data).subscribe((response: Iresponse) => {
      console.log(response);
    },
      error => {
        console.log(JSON.stringify(error));
      });

  }


  initLoginform() {
    this.loginForm = this.form.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
