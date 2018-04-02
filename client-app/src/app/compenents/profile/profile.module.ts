import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { AuthService } from '../../shared/services/auth.service';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
  providers: [AuthService]
})
export class ProfileModule { }
