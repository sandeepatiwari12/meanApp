import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/compenents/login/login.module#LoginModule'
  },
  {
    path: 'reset-password',
    loadChildren: 'app/compenents/login/reset-password/reset-password.module#ResetPasswordModule'
  },
  {
    path: 'customers',
    loadChildren: 'app/compenents/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: 'app/compenents/orders/orders.module#OrdersModule'
  },
  {
    path: 'about',
    loadChildren: 'app/compenents/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: 'app/compenents/contact/contact.module#ContactUsModule'
  },
  {
    path: '',
    loadChildren: 'app/compenents/home/home.module#HomeModule'
  },
  { path: '', redirectTo: 'login' , pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
