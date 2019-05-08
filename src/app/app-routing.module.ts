import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'kpop', loadChildren: './kpop/kpop.module#KpopPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'kdrama', loadChildren: './kdrama/kdrama.module#KdramaPageModule' },
  { path: 'home-kpop', loadChildren: './home-kpop/home-kpop.module#HomeKpopPageModule' },
  { path: 'home-kmovie', loadChildren: './home-kmovie/home-kmovie.module#HomeKmoviePageModule' },
  { path: 'home-vshow', loadChildren: './home-vshow/home-vshow.module#HomeVshowPageModule' },  { path: 'kdrama1', loadChildren: './kdrama1/kdrama1.module#Kdrama1PageModule' },
  { path: 'kdrama2', loadChildren: './kdrama2/kdrama2.module#Kdrama2PageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
