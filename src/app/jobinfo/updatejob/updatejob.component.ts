import { Component, OnInit } from '@angular/core';
import { AppService} from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {

  constructor(private app$:AppService, private router:Router) { }

  ngOnInit() {
  }

    //Need to figure out how to pass the jobID that is being updated into this function
  submimtUpdateForm(form:any, jobID:number){
   // console.log(form);
    jobID = 0;
    this.app$.updateJob(jobID, form.title, form.description, form.companyName, form.city, form.address, 
                        form.zipcode, form.phoneNo, form.salary, form.startDate, form.endDate);
    this.router.navigate(['dashboard']);
  }
}
