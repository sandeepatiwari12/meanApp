import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { AuthService } from '../../shared/services/auth.service';


@NgModule({
  imports: [
    MatModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeService,
    AuthService
  ]
})
export class HomeModule { }
