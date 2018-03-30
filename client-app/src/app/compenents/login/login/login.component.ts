import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginButton = 'Sign in';
  messageClass;
  message;
  processing = false;
  form;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authGuard: AuthGuard
  ) {
      this.createForm();
      this.loginButton = 'Sign in';
    }

  ngOnInit() {
    if (this.authGuard.redirectUrl) {
      this.messageClass = 'vt-error';
      this.message = 'You must be logged in to view that page.';
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }
  }

  // Function to create login form
  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  // Function to enable form
  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  // Functiont to submit form and login user
  onLoginSubmit() {
    this.processing = true;
    this.loginButton = 'Please wait...';
    this.disableForm();

    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };

    // Function to send login data to API
    this.authService.login(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'vt-error';
        this.message = data.message;
        this.processing = false;
        this.loginButton = 'Sign in';
        this.enableForm();
      } else {
        this.messageClass = 'vt-success';
        this.message = data.message;

        this.authService.storeUserData(data.token, data.user);

        setTimeout(() => {
          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]);
          } else {
            this.router.navigate(['/']);
          }
        }, 2000);
      }
    });
  }

}
