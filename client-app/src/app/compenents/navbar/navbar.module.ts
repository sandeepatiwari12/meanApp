import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { NavService } from './navbar.service';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavListComponent } from './nav-list/nav-list.component';
import { AuthGuard } from './../../shared/_guards/auth.guard';
import { AuthenticationService, UserService } from '../../shared/_services/index';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    NavbarRoutingModule
  ],
  declarations: [
    NavListComponent
  ],
  providers: [
    NavService,
    AuthGuard,
    AuthenticationService,
    UserService]
})
export class NavbarModule { }
