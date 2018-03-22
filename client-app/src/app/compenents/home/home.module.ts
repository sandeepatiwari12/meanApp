import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
