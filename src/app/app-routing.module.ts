import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';

const routes: Routes = [
    Route.withShell([
        { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
        { path: 'postOne', loadChildren: 'app/blog/post-one/post-one.module#PostOneModule' },
        { path: 'postTwo', loadChildren: 'app/blog/post-two/post-two.module#PostTwoModule' },
        { path: 'portfolio', loadChildren: 'app/portfolio/portfolio.module#PortfolioModule' }
    ]),
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }