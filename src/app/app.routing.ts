// Core import
import { Routes, RouterModule } from '@angular/router';

// Component import
import { HeaderComponent } from './header/header.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
    { path: '', component: WelcomePageComponent }
];

export const routing = RouterModule.forRoot(routes);