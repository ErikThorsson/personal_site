import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';
import {BlogComponent} from "@app/blog/blog.component";
import {PostOneComponent} from "@app/blog/post-one/post-one.component";
import {PostTwoComponent} from "@app/blog/post-two/post-two.component";
import {HomeComponent} from "@app/home/home.component";

const routes: Routes = [
    Route.withShell([
        { path: 'blog', component: BlogComponent },
        { path: 'postOne', component: PostOneComponent },
        { path: 'postTwo', component: PostTwoComponent },
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
