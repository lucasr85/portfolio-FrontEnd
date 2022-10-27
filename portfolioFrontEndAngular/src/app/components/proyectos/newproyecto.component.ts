import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string='';
  descripcion: string='';
  url: string='';

  constructor(private sProyecto: ProyectoService,private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy= new Proyecto(this.nombre, this.descripcion,this.url);
    this.sProyecto.save(proy).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate([''])
    },err=>{
      alert("Falló al intentar agregar proyecto");
      this.router.navigate(['']);
    })
  }
}