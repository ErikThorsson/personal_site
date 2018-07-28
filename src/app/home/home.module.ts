import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
