import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;
  usernameValid;
  usernameMessage;
  registerButton = 'Submit';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.createForm();
    }

  ngOnInit() {
  }
 // Function to create registration form
 createForm() {
  this.form = this.formBuilder.group({
    email: ['', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      this.validateEmail
    ])],

    username: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      this.validateUsername
    ])],

    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(35),
      this.validatePassword
    ])],

    confirm: ['', Validators.required]
  }, { validator: this.matchingPasswords('password', 'confirm') });
}

disableForm() {
  this.form.controls['email'].disable();
  this.form.controls['username'].disable();
  this.form.controls['password'].disable();
  this.form.controls['confirm'].disable();
}

enableForm() {
  this.form.controls['email'].enable();
  this.form.controls['username'].enable();
  this.form.controls['password'].enable();
  this.form.controls['confirm'].enable();
}

validateEmail(controls) {
  // Create a regular expression
  // tslint:disable-next-line:max-line-length
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (regExp.test(controls.value)) {
    return null;
  } else {
    return { 'validateEmail': true };
  }
}

// Function to validate username is proper format
validateUsername(controls) {
  const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
  if (regExp.test(controls.value)) {
    return null;
  } else {
    return { 'validateUsername': true };
  }
}

// Function to validate password
validatePassword(controls) {
  const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
  if (regExp.test(controls.value)) {
    return null;
  } else {
    return { 'validatePassword': true };
  }
}

// Funciton to ensure passwords match
matchingPasswords(password, confirm) {
  return (group: FormGroup) => {
    if (group.controls[password].value === group.controls[confirm].value) {
      return null;
    } else {
      return { 'matchingPasswords': true };
    }
  };
}


  // Function to submit form
  onRegisterSubmit() {
    this.processing = true;
    this.registerButton = 'Please wait...';
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };

    // Function from authentication service to register user
    this.authService.registerUser(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'vt-error';
        this.message = data.message;
        this.processing = false;
        this.registerButton = 'Submit';
        this.enableForm();
      } else {
        this.messageClass = 'vt-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    });

  }

  // Function to check if e-mail is taken
  checkEmail() {
    this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
      if (!data.success) {
        this.emailValid = false;
        this.messageClass = 'vt-error';
        this.emailMessage = data.message;
      } else {
        this.emailValid = true;
        this.messageClass = 'vt-success';
        this.emailMessage = data.message;
      }
    });
  }

  checkUsername() {
    this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'vt-error';
        this.usernameMessage = data.message;
      } else {
        this.usernameValid = true;
        this.messageClass = 'vt-success';
        this.usernameMessage = data.message;
      }
    });
  }



}
