import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {PostTwoComponent} from "@app/blog/post-two/post-two.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    declarations: [
        PostTwoComponent
    ]
})
export class PostTwoModule { }
