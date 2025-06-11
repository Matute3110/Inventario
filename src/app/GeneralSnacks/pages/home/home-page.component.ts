import { Component, ViewChild } from '@angular/core';
import { SnacksListComponent } from '../../components/snacks-list/snacks-list.component';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @ViewChild(SnacksListComponent) snacksList!: SnacksListComponent;

  cargarSnacks() {
    if (this.snacksList) {
      this.snacksList.cargarSnacks();
    }
  }

}
