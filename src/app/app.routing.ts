import { Routes, RouterModule } from '@angular/router';



import { AuthGuard } from './_guards/index';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {LogoutComponent} from './components/logout/logout.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent  , pathMatch: 'full'},
  { path: 'logout', component: LogoutComponent  , pathMatch: 'full'},

  { path: '', component: HomeComponent, canActivate: [AuthGuard] , pathMatch: 'full'},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
