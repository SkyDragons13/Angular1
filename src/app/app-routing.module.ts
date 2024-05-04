// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: CardsComponent }, // Display CardsComponent on the default route
  { path: '', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  {path:'',component:HeaderComponent},
  { path: '', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
