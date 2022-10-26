import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsSofts } from 'src/app/model/skills-softs';
import { SkillsSoftsService } from 'src/app/service/skills-softs.service';

@Component({
  selector: 'app-new-soft-skills',
  templateUrl: './new-soft-skills.component.html',
  styleUrls: ['./new-soft-skills.component.css']
})
export class NewSoftSkillsComponent implements OnInit {
  nombre: string='';
  porcentaje: number;

  constructor(private softsS: SkillsSoftsService , private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const softs = new SkillsSofts(this.nombre, this.porcentaje);
    this.softsS.save(softs).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}
