import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {PostOneComponent} from "./post-one.component";
import {PostOneRoutingModule} from "./post-one-routing.module";

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