import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import {PostTwoComponent} from "@app/blog/post-two/post-two.component";

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component :PostTwoComponent, data: { title: extract('PostTwo') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostTwoRoutingModule { }
