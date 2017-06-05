// Core import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Component import
import { HeaderComponent } from './header/header.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostJobComponent } from './jobinfo/post-job/post-job.component';
import { JobDetailComponent } from './jobinfo/jobs-table/job-detail/job-detail.component';
import { CallbackComponent } from './callback/callback.component';
import { UpdatejobComponent } from './jobinfo/updatejob/updatejob.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomePageComponent},
    { path: 'callback', component: CallbackComponent},
    { path: 'dashboard', component: DashboardComponent, children: [
        {path: '', component: JobinfoComponent},
        {path: 'postjob', component: PostJobComponent},
        {path: ':id', component: JobDetailComponent}        
    ]},
    {path: 'updatejob', component: UpdatejobComponent},
    
    // { path: "dashboard/jobs/:id", component: JobDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

