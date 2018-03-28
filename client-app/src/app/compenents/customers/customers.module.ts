import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from '../../shared/matModule';
import { EventReaderService } from '../../shared/eventReader';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContactsService } from './customers.service';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent, ConfirmDialogComponent],
  providers: [ContactsService, EventReaderService],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class CustomersModule { }
