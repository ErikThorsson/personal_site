import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BlogRoutingModule
  ],
  declarations: [
   BlogComponent
  ]
})
export class BlogModule { }
