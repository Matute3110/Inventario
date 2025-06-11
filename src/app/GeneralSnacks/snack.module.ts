import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SnacksListComponent } from './components/snacks-list/snacks-list.component';
import { SweetPageComponent } from './pages/sweet/sweet-page.component';
import { SaltysPageComponent } from './pages/saltys/saltys-page.component';
import { SharedModule } from '../shared/shared.module'; // <-- Si usas componentes compartidos

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    SnacksListComponent,
    SweetPageComponent,
    SaltysPageComponent,
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule // <-- Agrégalo aquí si usas componentes compartidos
  ]
})
export class SnackModule { }