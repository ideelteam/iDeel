// Core Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';


// Component Import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';

// Anything else
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app.routing';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsTableComponent } from './jobinfo/jobs-table/jobs-table.component';
import { PostJobComponent } from './jobinfo/post-job/post-job.component';
import { JobDetailComponent } from './jobinfo/jobs-table/job-detail/job-detail.component';
import { CallbackComponent } from './callback/callback.component';
import { FooterComponent } from './footer/footer.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserinfoComponent,
    JobinfoComponent,
    WelcomePageComponent,
    DashboardComponent,
    JobsTableComponent,
    PostJobComponent,
    JobDetailComponent,
    CallbackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
