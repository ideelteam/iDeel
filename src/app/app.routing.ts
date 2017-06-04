// Core import
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Component import
import { HeaderComponent } from './header/header.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BUserComponent } from './userinfo/buser/buser.component';
import { EUserComponent } from './userinfo/euser/euser.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostJobComponent } from './jobinfo/post-job/post-job.component';
import { JobDetailComponent } from './jobinfo/jobs-table/job-detail/job-detail.component';

const routes: Routes = [
    { path: '', redirectTo: "welcome", pathMatch: "full" },
    { path: 'welcome', component: WelcomePageComponent},
    { path: "dashboard", component: DashboardComponent, children: [
        {path: '', component: JobinfoComponent},
        {path: 'postjob', component: PostJobComponent},
        {path: ':id', component: JobDetailComponent}
        
    ]}
    
    // { path: "dashboard/jobs/:id", component: JobDetailComponent}

];

export const routing = RouterModule.forRoot(routes);
