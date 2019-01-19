import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoriasservice/categoria.service';
import { Categoria } from '../models/categorias';

@Component({
  selector: 'app-listarcategorias',
  templateUrl: './listarcategorias.component.html',
  styleUrls: ['./listarcategorias.component.scss']
})
export class ListarcategoriasComponent implements OnInit {
  model:any = {};

  constructor(private servicecategoria : CategoriaService) { }

  ngOnInit() {
  }
  listCategorias(i) {
    this.servicecategoria.getCategorias().subscribe((result : Categoria[])=>{
      console.log(result);
    });
  }

}
