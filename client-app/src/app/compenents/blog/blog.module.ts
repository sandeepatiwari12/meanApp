import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from '../../shared/matModule';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
