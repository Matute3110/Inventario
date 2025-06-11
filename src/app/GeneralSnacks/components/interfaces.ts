export interface Snack {
  id: number;
  name: string;
  amount: number;
  price: number;
  IVA: number;
  kind: 'Dulce' | 'Salado';
  state: 'Hay' | 'No hay';
}
