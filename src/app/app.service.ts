import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
//  host:string = 'http://localhost:3000';
  host:string = 'http://teamideel.azurewebsites.net';
  userId:string = "";
  body:any;
  options:any;

  constructor(private http: Http) { 
  }


getAllJobs() {
    return this.http.get( this.host + '/api/jobs')
    .map(response => response.json());
  }

getOneJob(jobID:string){
    return this.http.get(this.host + '/api/jobs/' + jobID)
      .map(response => response.json());
}

postJob(_jobID:number,_businessID:number,_title:string,_description:string,_companyName:string,
          _city:string,_zipcode:string,_address:string,_phoneNo:string,_salary:string,_startDate:string,
          _endDate:string,_availability:boolean)
    {
    
    this.body = {
      "jobID":_jobID,
      "businessID":_businessID,
      "title":_title,
      "description":_description,
      "companyName":_companyName,
      "city":_city,
      "zipcode":_zipcode,
      "address":_address,
      "phoneNo":_phoneNo,
      "salary":_salary,
      "startDate":_startDate,
      "endDate":_endDate,
      "availability":_availability
    };

    console.log(this.body);
     this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     return this.http.post(this.host + '/api/jobs', this.body, this.options)
      .map(res=>res.json());     
    }


deleteJob(_jobID:number){
  this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Method':'DELETE' });
  return this.http.delete(this.host + '/api/jobs/' + _jobID, this.options)
    .subscribe((res) => {
      if(res.status != 200){
        console.log("Server Error");
      }
    })
}

updateJob(_jobID:number, _title:string, _description:string, _company:string, _city:string, 
            _address:string, _zipcode:string, _phoneNo:string, _salary:string, _startDate:string, _endDate:string){
  
  this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Method':'PUT' });
  this.options.append('Accept','application/json');

  this.body = {
    "title":_title,
    "description":_description,
    "companyName":_company,
    "city":_city,
    "address":_address,
    "zipcode":_zipcode,
    "phoneNo":_phoneNo,
    "salary":_salary,
    "startDate":_startDate,
    "endDate":_endDate
  };

  console.log("inside updateJob");
  console.log(this.body);
  return this.http.put(this.host + '/api/jobs/' + _jobID, this.body, this.options)
    .subscribe((res) => {
      if(res.status != 200){
        console.log("Server Error");
      }
    })

}

}