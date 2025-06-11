import { Injectable } from '@angular/core';
import { Snack } from '../components/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/enviroment.develepment';
import { tap, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SnackServicesService {
  private api: string = environment.api;

  constructor(private http: HttpClient) {}

 
  getSnacksFromApi(): Observable<any> {
    return this.http.get<Snack[]>(`${this.api}/lists`);
  }

  
  addSnackToApi(snack: Omit<Snack, 'id' | 'IVA'>): Observable<any> {
    return this.http.post<Snack>(`${this.api}/addProducts`, snack);
  }

 
  deleteSnackFromApi(id: number): Observable<any> {
    return this.http.delete(`${this.api}/addProducts/${id}`);
  }
}

  //   searchSnacks(term: string): Snack[] {
  //     if (!term.trim()) return this.snacks;
  //     return this._snacks.filter(s => s.name.toLowerCase().includes(term.toLowerCase()));
  //   }
  // }
