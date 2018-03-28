import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './../../shared/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './../../shared/_guards/auth.guard';
import { AuthenticationService, UserService } from '../../shared/_services/index';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatModule } from '../../shared/matModule';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpModule,
  ],
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class LoginModule { }
