import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchJumbotronComponent } from './search-jumbotron/search-jumbotron.component';
import { PexelImageComponent } from './pexel-image/pexel-image.component';
import { UserInfoContainerComponent } from './user-info-container/user-info-container.component';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchJumbotronComponent,
    PexelImageComponent,
    UserInfoContainerComponent,
    UserProfileModalComponent,
    NavbarMenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    SearchJumbotronComponent,
    PexelImageComponent,
    NavbarMenuComponent,
  ],
})
export class SharedModule {}
