import {Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService} from '../../../app.service';
import IJobModel from '../../../interface/IJobModel';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {

  jobInfo:IJobModel;
  jobID:string;
  jobExport :IJobModel;

  constructor(
    private route: ActivatedRoute,
    private app$: AppService
  ) {
    this.jobID = this.route.snapshot.params['id'];
    this.app$.getOneJob(this.jobID)
    .subscribe(
      result => {
        this.jobInfo = result;
        //console.log(JSON.stringify(this.jobInfo));
      },
      () => {},
      () => {}
    );
   }


  ngOnInit() {
    this.jobExport = this.jobInfo;
  }

  applyJob(){
    //Need to write this
  }

  saveJob(){
    //Need to write this
  }
}
