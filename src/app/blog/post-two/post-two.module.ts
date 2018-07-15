import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {PostTwoRoutingModule} from "./post-two-routing.module";
import {PostTwoComponent} from "@app/blog/post-two/post-two.component";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        PostTwoRoutingModule
    ],
    declarations: [
        PostTwoComponent
    ]
})
export class PostTwoModule { }