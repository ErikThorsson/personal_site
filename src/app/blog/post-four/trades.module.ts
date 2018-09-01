import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {TradesComponent} from '@app/blog/post-four/trades.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    declarations: [
        TradesComponent
    ]
})
export class TradesModule {}
