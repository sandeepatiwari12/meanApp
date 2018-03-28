import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from '../../../shared/_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginButton: string;
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
      this.loginButton = 'Sign in';
    }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.loginButton = 'Loading...';
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
                this.loginButton = 'Sign in';
            }
        });
}
}
