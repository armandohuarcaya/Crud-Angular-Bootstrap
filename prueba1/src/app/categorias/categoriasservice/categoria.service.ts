import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  URLCategorias : string = 'http://127.0.0.1:8000/api/categorias';

  constructor(private http : HttpClient) { }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.URLCategorias);

  }
}
