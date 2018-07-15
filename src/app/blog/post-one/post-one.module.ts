import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {PostOneRoutingModule} from "./post-one-routing.module";
import {PostOneComponent} from "@app/blog/post-one/post-one.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
      PostOneRoutingModule
  ],
  declarations: [
   PostOneComponent
  ]
})
export class PostOneModule { }