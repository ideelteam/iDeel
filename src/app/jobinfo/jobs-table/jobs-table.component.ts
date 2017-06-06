import {Input, Component, OnInit, Output } from '@angular/core';
import IJobModel from '../../interface/IJobModel';
import { Router, ActivatedRoute } from "@angular/router";
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.css']
})

export class JobsTableComponent implements OnInit {
  @Input() jobs: IJobModel[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    $(document).ready(function () {
    $('.hover').hover(function () {
      $(this).addClass('flip');
    }, function () {
      $(this).removeClass('flip');
    });
    $('.hover').click(function () {
      let thisJobID = $(this).find('#jobID').text();
      console.log(thisJobID);
      
    });
  });
  }

  onClick(jobID: string){
   this.router.navigate(["dashboard", jobID]);
  }

  onClickToPostJob(){
    this.router.navigate(['postjob'], {relativeTo: this.route});
  }
}
