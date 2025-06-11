import { Component, Input, OnInit, } from '@angular/core';
import { SnackServicesService } from '../../services/snack.service';
import { Snack } from '../interfaces';

@Component({
  standalone: false,
  selector: 'snacks-list',
  templateUrl: './snacks-list.component.html',
  styleUrl: './snacks-list.component.css'
})
export class SnacksListComponent implements OnInit {
  @Input() searchTerm: string = '';

  showCategoria = true;
  snacks: Snack[] = [];
  snacksFiltrados: Snack[] = [];
  categoriaFiltro: 'Dulce' | 'Salado' | null = null;

  constructor(public snackService: SnackServicesService) {}

  ngOnInit() {
    this.cargarSnacks();

    this.snackService.getSnacksFromApi();
  }

  public cargarSnacks() {
    this.snackService.getSnacksFromApi().subscribe(data => {
      this.snacks = data;
      this.filtrarSnacks();
    });
  }

  filtrarSnacks() {
    let filtrados = this.snacks;
    if (this.searchTerm) {
      filtrados = filtrados.filter(s => s.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    if (this.categoriaFiltro) {
      filtrados = filtrados.filter(s => s.kind === this.categoriaFiltro);
    }
    this.snacksFiltrados = filtrados;
  }

  updateCategoria(categoria: 'Dulce' | 'Salado' | null) {
    this.categoriaFiltro = categoria;
    this.filtrarSnacks();
  }

  deleteSnackFromApi(id: number): void {
    this.snackService.deleteSnackFromApi(id).subscribe(() => {
      this.cargarSnacks();
    });
  }
}
