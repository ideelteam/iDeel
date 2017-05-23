import {Input, Component, OnInit } from '@angular/core';
import IJobModel from '../../interface/IJobModel';
import { Router } from "@angular/router";

@Component({
  selector: 'jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.css']
})

export class JobsTableComponent implements OnInit {
@Input() jobs: IJobModel[];

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  onClick(singleJob:any){
    console.log(singleJob);
    this.route.navigate(['/dashboard/jobs/', singleJob.jobID]);
  }
}
