import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RestApiService } from '../../../servicio/rest-api.service';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  //UN POST

  formularioEstudiante = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    carrera: new FormControl('')
  });

  constructor(private servicio_rest: RestApiService){}

  guardarDatos():void{
    console.log("chauu")
    
    this.servicio_rest.guardarEstudiante({
      "nombre":this.formularioEstudiante.value.nombre,
      "apellido":this.formularioEstudiante.value.apellido,
      "edad":this.formularioEstudiante.value.edad,
      "carrera":this.formularioEstudiante.value.carrera
    }).subscribe(datos => {
      console.log(datos);
      console.log("estudiante guardado correctamente");
    });
    
  }

}



