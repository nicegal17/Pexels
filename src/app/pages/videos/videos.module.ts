import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [CommonModule, VideosRoutingModule, NgxMasonryModule, SharedModule],
})
export class VideosModule {}
