import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {PostFourComponent} from '@app/blog/post-four/post-four.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    declarations: [
        PostFourComponent
    ]
})
export class PostFourModule { }
