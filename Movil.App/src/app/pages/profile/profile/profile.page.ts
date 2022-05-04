import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  coreURL = environment.coreURL;
  img_Width = 140
  img_height = 130;

  profile: Profile;
  
  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }

}
