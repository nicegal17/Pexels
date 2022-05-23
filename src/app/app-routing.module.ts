import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'discover', loadChildren: () => import('./pages/discover/discover.module').then(m => m.DiscoverModule) },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'videos', loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
