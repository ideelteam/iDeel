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
  userID: any;
  businessObject: any;
  workerObject: any;

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
        this.userID = this.profile.sub;
        let straightDash = this.userID.indexOf('|') + 1;
        this.userID = this.userID.slice(straightDash);
        this.retrieveInfo();   
      }
      )
    }        
  }

  retrieveInfo(){
    this.app$.getBusinessUser(this.userID)
        .subscribe(
          businessUser => {
          this.businessObject = businessUser;
          if(this.businessObject != null){
            this.isBusiness = true;
          }
          },
          () => {},
          () => {}
        ); 
  }

}
