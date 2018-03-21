import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ContactsService } from './customers.service';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent],
  providers: [ContactsService]
})
export class CustomersModule { }
