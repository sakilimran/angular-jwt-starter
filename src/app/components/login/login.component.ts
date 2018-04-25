import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = '';

  public isLoggedIn = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.createForm();
    this.isLoggedIn = this.authenticationService.isLoggedin();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  login() {
    this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe(result => {
          if (result === true) {
            this.router.navigate(['/']);
            // this.authenticationService.refresh();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error2 => {
          this.error = 'Username or password is incorrect';
        }
      );
  }
  ngOnInit() {
    if (this.authenticationService.isLoggedin()) {
      this.router.navigate(['/']);
    }


  }

}
