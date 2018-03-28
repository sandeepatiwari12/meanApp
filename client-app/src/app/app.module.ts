import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import 'rxjs/add/operator/toPromise';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './shared/matModule';
import { NavService } from './compenents/navbar/navbar.service';
import { NavListComponent } from '../app/compenents/navbar/nav-list/nav-list.component';
// import { NavbarModule } from '../app/compenents/navbar/navbar.module';
import { EventReaderService } from './shared/eventReader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent
  ],
  imports: [
    // NavbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule
  ],
  providers: [
    EventReaderService,
    NavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
