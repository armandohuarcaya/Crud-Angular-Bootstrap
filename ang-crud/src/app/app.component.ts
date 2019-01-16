import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular-crud';
  msg:string = '';
  hideUpdate:boolean = true;

  empleados = [
    {'name': 'Cristian', puesto: 'Director', email: 'cristian.huarcayas@gmail.com' },
    {'name': 'Armando', puesto: 'Diseñador', email: 'cristian.huarcayas@gmail.com' },
    {'name': 'Ruth', puesto: 'Programador', email: 'cristian.huarcayas@gmail.com' }
  ];

  model:any = {};
  model2:any = {};

  addEmpleado(): void{
    this.empleados.push(this.model);
    this.msg = 'Campo Agregado';

  }

  deleteEmpleado(i): void{
    var answer = confirm('Desea usted eliminar este dato?');
    //*console.log(answer);*//
    if(answer) {
      this.empleados.splice(i, 1);
      this.msg = 'Campo Eliminado';
    }
    alert('Delete');

  }
  myValue;
  editEmpleado(i): void{
    this.hideUpdate = false;
    this.model2.name = this.empleados[i].name;
    this.model2.puesto = this.empleados[i].puesto;
    this.model2.email = this.empleados[i].email;
    this.myValue = i;

  }

  updateEmpleado(): void{
    let i = this.myValue;
    for(let j = 0; j < this.empleados.length; j++ ) {
      if ( i == j ) {
        this.empleados[i] = this.model2;
        this.model2 = {};
        this.msg = 'Campo Actualizado';
      }
    }

  }
  closeAlert(): void{
    this.msg = '';
  }
}
