import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule,
    MatChipsModule,
  ],
})
export class DiscoverModule {}
