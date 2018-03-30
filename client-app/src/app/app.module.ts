import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'hammerjs';
import 'rxjs/add/operator/toPromise';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './shared/matModule';
import { NavService } from './compenents/navbar/navbar.service';
import { NavListComponent } from '../app/compenents/navbar/nav-list/nav-list.component';
import { EventReaderService } from './shared/eventReader';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { NotAuthGuard } from './shared/guards/notAuth.guard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule
  ],
  providers: [
    EventReaderService,
    NavService,
    AuthService,
    AuthGuard,
    NotAuthGuard,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
