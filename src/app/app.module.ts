// Core Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component Import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';

// Anything else
import { AppService } from './app.service'
import { routing } from './app.routing'
import { APP_BASE_HREF } from '@angular/common';
import { OneJobComponent } from './jobinfo/one-job/one-job.component';
import { BUserComponent } from './userinfo/buser/buser.component';
import { EUserComponent } from './userinfo/euser/euser.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserinfoComponent,
    JobinfoComponent,
    OneJobComponent,
    BUserComponent,
    EUserComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
