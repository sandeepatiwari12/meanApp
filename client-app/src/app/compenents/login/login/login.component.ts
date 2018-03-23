import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService, TokenPayload } from '../../../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // credentials: TokenPayload = {
  //   email: '',
  //   password: ''
  // };

  constructor(
    // private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  // Login Function
  // login() {
  //   this.auth.login(this.credentials).subscribe(() => {
  //     this.router.navigateByUrl('/profile');
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }

}
