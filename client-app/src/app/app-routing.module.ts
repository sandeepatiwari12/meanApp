import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/_guards/index';
import { AuthenticationService, UserService } from './shared/_services/index';


const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/compenents/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  // {
  //   path: '',
  //   loadChildren: 'app/compenents/navbar/navbar.module#NavbarModule',
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'customers',
    loadChildren: 'app/compenents/customers/customers.module#CustomersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    loadChildren: 'app/compenents/orders/orders.module#OrdersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: 'app/compenents/about/about.module#AboutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: 'app/compenents/contact/contact.module#ContactUsModule',
    canActivate: [AuthGuard]
  },
  // without Authgaurd
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

  // for specific ID
  {
    path: 'about/:_id',
    loadChildren: 'app/compenents/about/about.module#AboutModule',
    canActivate: [AuthGuard]
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
    AuthGuard,
    AuthenticationService,
    UserService
  ]
})
export class AppRoutingModule { }
