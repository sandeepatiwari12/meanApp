import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatModule } from '../../shared/matModule';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatModule
  ],
  declarations: [AboutUsComponent]
})
export class AboutModule { }
