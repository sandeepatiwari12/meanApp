import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './shared/matModule';
import { NavService } from './shared/nav.service';
// import { AuthenticationService } from './shared/authentication.service';
// import { AuthGuardService } from './shared/auth-guard.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule
  ],
  providers: [
    NavService,
    // AuthenticationService,
    // AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
