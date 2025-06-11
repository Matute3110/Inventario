import { Component, ElementRef, ViewChild ,Output, EventEmitter } from '@angular/core';
import { SnackServicesService } from '../../services/snack.service';
import { Snack } from '../interfaces';

@Component({
  selector: 'snacks-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild("txtTagInput") tagInput!: ElementRef<HTMLInputElement>;
  showAddModal = false;
  searchTerm = '';
  nombre = '';
  cantidad: number|null = null;
  precio: number|null = null;
  categoria: 'Dulce' | 'Salado' = 'Dulce';
  estado: 'Hay' | 'No hay' = 'Hay';

  @Output() snackAdded = new EventEmitter<void>();

  constructor(public snackService: SnackServicesService) { }

  searchTag() {
    this.searchTerm = this.tagInput.nativeElement.value;
  }

  openAddModal() {
    this.showAddModal = true;
    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
    this.categoria = 'Dulce';
    this.estado = 'Hay';
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  addSnack() {
  if (this.nombre.trim() && this.cantidad !== null && this.precio !== null) {
    const snack: Omit<Snack, 'id' | 'IVA'> = {
      name: this.nombre.trim(),
      amount: this.cantidad,
      price: this.precio,
      kind: this.categoria,
      state: this.estado,
    };
    this.snackService.addSnackToApi(snack).subscribe(() => {
      this.closeAddModal();
      this.snackAdded.emit();
    });
  }
}

  get isAddButtonDisabled(): boolean {
    return !this.nombre.trim() || this.cantidad === null || this.precio === null;
  }
}
