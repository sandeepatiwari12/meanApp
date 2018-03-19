import { MatModule } from '../../shared/matModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
