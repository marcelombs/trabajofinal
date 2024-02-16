import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { RestApiService } from '../../servicio/rest-api.service';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string
}

const estudiantes: Estudiante[] = [
  {nombre: "Paola", apellido: "Lopez", edad: 23, carrera: "Ing. de Sistemas"},
  {nombre: "Paola", apellido: "Lopez", edad: 23, carrera: "Ing. de Sistemas"},
  {nombre: "Paola", apellido: "Lopez", edad: 23, carrera: "Ing. de Sistemas"},
  {nombre: "Paola", apellido: "Lopez", edad: 23, carrera: "Ing. de Sistemas"},
  {nombre: "Paola", apellido: "Lopez", edad: 23, carrera: "Ing. de Sistemas"},
  {nombre: "Paola", apellido: "Lopez", edad: 23, carrera: "Ing. de Sistemas"}
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

 
  nombres_columnas: string[] = ['id','nombre', 'apellido', 'edad', 'carrera'];

  //GET A ESTUDIANTES
  lista_estudiantes = estudiantes;

  constructor(private servicio_rest:RestApiService){
  }

  ngOnInit():void
  {
    this.servicio_rest.getEstudiantes().subscribe(datos => {
      console.log(datos);
      this.lista_estudiantes = datos;
    });
  }

}
