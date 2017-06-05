import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

   profile: any;

  constructor(private router: Router, private route: ActivatedRoute, public auth: AuthService) {
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

  onClickToPostJob(){
    this.router.navigate(['postjob'], {relativeTo: this.route});
  }
  updateInfoFirstTime() {
    this.router.navigate(['updateinfo'], {relativeTo: this.route});
  }

  checkExisted(): boolean{


    return false;
  }

}
