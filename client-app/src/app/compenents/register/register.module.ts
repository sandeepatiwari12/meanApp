import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { MatModule } from '../../shared/matModule';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
