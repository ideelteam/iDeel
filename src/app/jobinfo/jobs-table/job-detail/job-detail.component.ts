import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService} from '../../../app.service';
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

  constructor(private route: ActivatedRoute, private app$: AppService) {
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
  }

  applyJob(wUsersID:string, jobID:string){
    this.setAppliedListJob(wUsersID, jobID);
    this.setAppliedListUser(wUsersID, jobID);
     
  }

  setAppliedListJob(wUsersID:string, jobID:string){
    this.app$.setAppliedJob(wUsersID, jobID)
    .subscribe(result => {
      this.putResponse = JSON.stringify(result)},
      err => console.log("Error HTTP Put Service"),
      () => console.log("Data has been modified"),
    );
  }

  setAppliedListUser(wUsersID:string, jobID:string){
    this.app$.setAppliedUser(wUsersID, jobID)
    .subscribe(result => {
      this.putResponse = JSON.stringify(result)},
      err => console.log("Error HTTP Put Service"),
      () => console.log("Data has been modified"),
    
    );
  }

  saveJob(){
    //Need to write this
  }
}
