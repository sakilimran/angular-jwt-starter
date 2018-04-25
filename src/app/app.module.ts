import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './_guards';
import {AuthenticationService} from './_services/authentication.service';
import {DataService} from './_services/data.service';
import {UserService} from './_services/user.service';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    RegistrationComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    DataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
