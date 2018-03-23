import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthenticationService } from './shared/authentication.service';
// import { AuthGuardService } from './shared/auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/compenents/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/compenents/register/register.module#RegisterModule'
  },
  {
    path: 'reset-password',
    loadChildren: 'app/compenents/login/reset-password/reset-password.module#ResetPasswordModule'
  },
  {
    path: 'customers',
    loadChildren: 'app/compenents/customers/customers.module#CustomersModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: 'orders',
    loadChildren: 'app/compenents/orders/orders.module#OrdersModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    loadChildren: 'app/compenents/about/about.module#AboutModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: 'contact',
    loadChildren: 'app/compenents/contact/contact.module#ContactUsModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: 'app/compenents/home/home.module#HomeModule',
    // canActivate: [AuthGuardService]
  },

  // for specific ID

  {
    path: 'about/:_id',
    loadChildren: 'app/compenents/about/about.module#AboutModule',
    // canActivate: [AuthGuardService]
  },

  { path: '', redirectTo: 'login' , pathMatch: 'full' },
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    // AuthenticationService,
    // AuthGuardService
  ]
})
export class AppRoutingModule { }
