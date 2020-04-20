import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'drink',
    loadChildren: () => import('./drink/drink.module').then( m => m.DrinkPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
