import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {PostOneComponent} from "@app/blog/post-one/post-one.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
   PostOneComponent
  ]
})
export class PostOneModule { }
