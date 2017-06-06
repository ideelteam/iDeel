import { Component, OnInit } from '@angular/core';
import { AppService} from '../../app.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

jobID:number;
postResponse:string;
businessID:number;
private id: number = 0;

  constructor(private app$:AppService,private router: Router) {
    this.app$.getAllJobs()
    .subscribe(
      result => {       
        result.sort(function(a,b) {return (a.jobID > b.jobID) ? 1 : ((b.jobID > a.jobID) ? -1 : 0);} ); 
        this.id = result[result.length-1].jobID + 1;
        this.businessID = result.length + 1000;
        console.log(result);
      },
      () => {},
      () => {}
    )
     
   }

  ngOnInit() {
    
  }

  submitForm(form: any): void{
    this.jobID = this.id;
    this.app$.postJob(this.jobID, this.businessID,form.title,form.description,form.companyName,form.city,form.zipcode,form.address,form.phoneNo,form.salary,form.startDate,form.endDate,true)
    .subscribe(result => {
      this.postResponse = JSON.stringify(result),
      err => console.log("Error HTTP Post Service"),
      () => console.log("Data has been posted")
    });

    this.router.navigate(['dashboard']);
  }
  

  }



