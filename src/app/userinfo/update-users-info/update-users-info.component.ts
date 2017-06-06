import { Component, OnInit } from '@angular/core';
import { AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-update-users-info',
  templateUrl: './update-users-info.component.html',
  styleUrls: ['./update-users-info.component.css']
})
export class UpdateUsersInfoComponent implements OnInit {
  
  profile: any;
  isBusiness: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private app$: AppService,
              private auth: AuthService) {
               }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  changeStateBusiness(){
    this.isBusiness = true;
  }

  changeStateWorker(){
    this.isBusiness = false;
  }

}
