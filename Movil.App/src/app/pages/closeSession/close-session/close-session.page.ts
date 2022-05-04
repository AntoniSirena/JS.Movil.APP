import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-session',
  templateUrl: './close-session.page.html',
  styleUrls: ['./close-session.page.scss'],
})
export class CloseSessionPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.logOut();
  }

  
  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
