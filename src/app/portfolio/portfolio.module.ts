import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
