import {Input, Component, OnInit, Output } from '@angular/core';
import IJobModel from '../../interface/IJobModel';
import { Router } from "@angular/router";
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
    private route: Router
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
      //this.onClick(thisJobID);
    });
  });
  }

  onClick(jobID: string){
   this.route.navigate(["dashboard", jobID]);
  }

}
