import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavListComponent } from '../app/compenents/navbar/nav-list/nav-list.component';
import { AuthGuard } from '././shared/guards/auth.guard';
import { NotAuthGuard } from '././shared/guards/notAuth.guard';


const routes: Routes = [
  {
    path: '',
    component: NavListComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/compenents/home/home.module#HomeModule'
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
      // {
      //   path: 'profile',
      //   loadChildren: 'app/compenents/profile/profile.module#ProfileModule'
      // },
      // {
      //   path: 'blog',
      //   loadChildren: 'app/compenents/blog/blog.module#BlogModule'
      // },

      // for specific ID
      {
        path: 'about/:_id',
        loadChildren: 'app/compenents/about/about.module#AboutModule'
      },
    ]
  },

  // without Authgaurd
  {
    path: 'login',
    loadChildren: 'app/compenents/login/login.module#LoginModule',
    canActivate: [NotAuthGuard]
  },
  {
    path: 'register',
    loadChildren: 'app/compenents/register/register.module#RegisterModule',
    canActivate: [NotAuthGuard]
  },
  {
    path: 'reset-password',
    loadChildren: 'app/compenents/login/reset-password/reset-password.module#ResetPasswordModule',
    canActivate: [NotAuthGuard]
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
    AuthGuard
  ]
})
export class AppRoutingModule { }
