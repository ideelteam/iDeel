import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService} from '../../../app.service';
import { AuthService } from '../../../auth/auth.service';
import IJobModel from '../../../interface/IJobModel';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {
  jobID: string;
  jobInfo: IJobModel;
  putResponse: string;
  userInfo: any;

  constructor(private route: ActivatedRoute, private app$: AppService, private router: Router, private auth: AuthService) {

    this.jobID = this.route.snapshot.params['id'];
    this.app$.getOneJob(this.jobID)
    .subscribe(
      result => {
        this.jobInfo = result;
      },
      () => {},
      () => {}
    );
   }


  ngOnInit() {
    if(this.auth.userProfile) {
      this.userInfo = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.userInfo = profile;
      });
    }
  }

  applyJob(){
    let wUsersID = this.userInfo.sub;
    let straightDash = wUsersID.indexOf('|')+1;
    wUsersID = wUsersID.slice(straightDash);
    //console.log(wUsersID);
    //take this out!!!!!!!!!!!!!!!!
    wUsersID = 1;
    //need to get wuser email
    let workerEmail = "lhyroger@gmail.com";
    //need to call to get one bUser to get email
    let businessEmail = "lhyroger@gmail.com";
    this.setAppliedListJob(wUsersID, this.jobID);
    this.setAppliedListUser(wUsersID, this.jobID);
    this.sendEmailWorker(workerEmail,businessEmail);
    this.sendEmailBusiness(workerEmail,businessEmail);
    
    alert("Thank you for using our service!\n Your application sent to " + businessEmail );
  }

  sendEmailWorker(workerEmail:string,businessEmail:string){
    this.app$.sendWorkerEmail(workerEmail, businessEmail)
    .subscribe(result => {
      this.putResponse = JSON.stringify(result)},
      () => {},
      () => {}
    );
  }

  sendEmailBusiness(workerEmail:string,businessEmail:string){
    this.app$.sendBusinessEmail(workerEmail,businessEmail)
    .subscribe(result => {
      this.putResponse = JSON.stringify(result)},
      () => {},
      () => {}
    );
  }

  setAppliedListJob(wUsersID:string, jobID:string){
    this.app$.setAppliedJob(wUsersID, jobID)
    .subscribe(result => {
      this.putResponse = JSON.stringify(result)},
      err => console.log("Error HTTP Put Service"),
      () => console.log("userID saved in job's appliedList"),
    );
  }

  setAppliedListUser(wUsersID:string, jobID:string){
    this.app$.setAppliedUser(wUsersID, jobID)
    .subscribe(result => {
      this.putResponse = JSON.stringify(result)},
      err => console.log("Error HTTP Put Service"),
      () => console.log("jobID saved in user's appliedList"),
    
    );
  }

  saveJob(wUsersID:string, jobID:string){
    this.app$.addSaveJob(wUsersID, jobID)
    .subscribe(result=>{
      this.putResponse = JSON.stringify(result)},
      err => console.log("Error HTTP Put Service"),
      () => console.log("Job saved"),
    
    );
    
  }

  updateJob(){
    //this.app$.updateJob(_jobID,_title,_description,_company,_city,_address,_zipcode,_salary);
    this.router.navigate(['dashboard/updatejob']);
  }

  deleteJob(_jobID:number){
    this.app$.deleteJob(_jobID);
    this.router.navigate(['dashboard']);
  }
}
