import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

   profile: any;
   isExisted: boolean;
   isBusiness: boolean;
   businessObject: any;
   workerObject: any;
   userID: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private auth: AuthService,
              private app$: AppService) {

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
        this.app$.getBusinessUser(this.userID)
        .subscribe(
          businessUser => {
          this.businessObject = JSON.parse(businessUser);
          this.isBusiness = true;
          },
          () => {},
          () => {}
        );
        this.app$.getWorkerUser(this.userID)
        .subscribe(
          workerUser => {
            this.workerObject = JSON.parse(workerUser);
            this.isBusiness = false;
          },
          () => {},
          () => {}
        );
        if(Object.keys(this.businessObject).length == 0 && Object.keys(this.workerObject).length == 0){
          this.isExisted = false;
        } else if(Object.keys(this.businessObject).length != 0 && Object.keys(this.workerObject).length == 0){
          this.isExisted = true;
        } else if(Object.keys(this.businessObject).length == 0 && Object.keys(this.workerObject).length != 0) {
          this.isExisted = true;
        }
      });
    }
  }

  onClickToPostJob(){
    this.router.navigate(['postjob'], {relativeTo: this.route});
  }

  updateInfoFirstTime() {
    this.router.navigate(['updateinfo'], {relativeTo: this.route});
  }

  // checkExisted(){
  //   let userID = this.profile.sub;
  //   let straightDash = userID.indexOf('|') + 1;
  //   userID = userID.slice(straightDash);
  //   this.app$.getBusinessUser(userID)
  //   .subscribe(
  //     businessUser => {
  //      this.businessObject = businessUser;
  //      this.isBusiness = true;
  //     },
  //     () => {},
  //     () => {}
  //   );

  //   this.app$.getWorkerUser(userID)
  //   .subscribe(
  //     workerUser => {
  //       this.workerObject = workerUser;
  //       this.isBusiness = false;
  //     },
  //     () => {},
  //     () => {}
  //   );

  //   if(Object.keys(this.businessObject).length == 0 && Object.keys(this.workerObject).length == 0){
  //     this.isExisted = false;
  //   } else if(Object.keys(this.businessObject).length != 0 && Object.keys(this.workerObject).length == 0){
  //     this.isExisted = true;
  //   } else if(Object.keys(this.businessObject).length == 0 && Object.keys(this.workerObject).length != 0) {
  //     this.isExisted = true;
  //   }

  // }

}
