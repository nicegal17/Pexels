import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NgxMasonryModule, SharedModule],
})
export class HomeModule {}
