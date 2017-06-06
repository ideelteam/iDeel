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
        console.log(this.userID);
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

  setIsBusiness(){
     if(this.businessObject != null){
            this.isBusiness = true;
          }
  }

  checkEverythingElse() {
    console.log(this.businessObject);
    console.log(this.workerObject);
    if(this.businessObject != undefined){
      console.log(this.businessObject);
      this.isBusiness = true;
      console.log(this.isBusiness);
    } else if (this.workerObject != null) {
      console.log(this.workerObject);
      this.isBusiness = false;
      console.log(this.isBusiness);
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
