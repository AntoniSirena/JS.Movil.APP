import { Component } from '@angular/core';
import { Profile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Mi perfil', url: '/profile', icon: 'person' },
  ];

  profle: Profile;

  constructor(
   
  ) {}

  ngOnInit() {
  }

}
