import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
