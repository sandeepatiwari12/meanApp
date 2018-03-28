import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { AuthGuard } from './../../shared/_guards/auth.guard';
import { AuthenticationService, UserService } from '../../shared/_services/index';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeService,
    UserService,
    AuthenticationService]
})
export class HomeModule { }
