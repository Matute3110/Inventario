import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetPageComponent } from './GeneralSnacks/pages/sweet/sweet-page.component';
import { SaltysPageComponent } from './GeneralSnacks/pages/saltys/saltys-page.component';
import { HomePageComponent } from './GeneralSnacks/pages/home/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full',},
  { path: 'sweet', component: SweetPageComponent },
  { path: 'saltys', component: SaltysPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
