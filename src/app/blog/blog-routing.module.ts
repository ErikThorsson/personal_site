import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component :BlogComponent, data: { title: extract('Blog') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BlogRoutingModule { }
