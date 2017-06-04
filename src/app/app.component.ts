import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPage: string;
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
   }
  onNavigation(page: string){
   // this.loadedPage = page;
  }
}
