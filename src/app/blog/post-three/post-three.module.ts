import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {PostThreeComponent} from '@app/blog/post-three/post-three.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    declarations: [
        PostThreeComponent
    ]
})
export class PostThreeModule { }
