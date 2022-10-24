import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})

export class NeweducacionComponent implements OnInit {
  nombreE: string='';
  descripcionE: string='';
  nivel: string='';
  periodo: string='';
  estado: string='';
  logo: string='';
  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.nivel, this.periodo, this.estado, this.logo);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educación añadadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló al intentar agregar educación");
        this.router.navigate(['']);
      }
    )
  }

  
}