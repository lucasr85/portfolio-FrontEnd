import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsHards } from 'src/app/model/skills-hards';
import { SkillsHardsService } from 'src/app/service/skills-hards.service';

@Component({
  selector: 'app-new-hard-skills',
  templateUrl: './new-hard-skills.component.html',
  styleUrls: ['./new-hard-skills.component.css']
})
export class NewHardSkillsComponent implements OnInit {
  nombre: string='';
  porcentaje: number;

  constructor(private hardsS: SkillsHardsService , private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hards = new SkillsHards(this.nombre, this.porcentaje);
    this.hardsS.save(hards).subscribe(
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