import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w-user-form-update',
  templateUrl: './w-user-form-update.component.html',
  styleUrls: ['./w-user-form-update.component.css']
})
export class WUserFormUpdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(form: any){

    this.router.navigate(['dashboard']);
  }

}
