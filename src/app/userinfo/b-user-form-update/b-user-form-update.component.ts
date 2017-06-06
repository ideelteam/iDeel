import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-user-form-update',
  templateUrl: './b-user-form-update.component.html',
  styleUrls: ['./b-user-form-update.component.css']
})
export class BUserFormUpdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(form: any){

    this.router.navigate(['dashboard']);
  }

}
