import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './../../shared/guards/auth.guard';
import { NotAuthGuard } from './../../shared/guards/notAuth.guard';
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
    FlashMessagesModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthGuard,
    NotAuthGuard
  ]
})
export class LoginModule { }
