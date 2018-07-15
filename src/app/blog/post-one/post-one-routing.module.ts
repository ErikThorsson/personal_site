import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '../../core/index';
import {PostOneComponent} from "@app/blog/post-one/post-one.component";

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component :PostOneComponent, data: { title: extract('PostOne') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostOneRoutingModule { }
