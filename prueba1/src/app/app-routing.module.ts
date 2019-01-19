import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarcategoriasComponent } from './categorias/listarcategorias/listarcategorias.component';

const routes: Routes = [
  {
    path: 'categorias', component: ListarcategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
