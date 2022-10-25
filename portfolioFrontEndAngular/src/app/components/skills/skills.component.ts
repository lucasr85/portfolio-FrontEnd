import { Component, OnInit } from '@angular/core';
import { SkillsHards } from 'src/app/model/skills-hards';
import { SkillsHardsService } from 'src/app/service/skills-hards.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hards: SkillsHards[]=[];

  constructor(private hardsS: SkillsHardsService, private tokenService: TokenService) {}
  isLogged =false;

  ngOnInit(): void {
    this.cargarHardsSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHardsSkill(): void{
    this.hardsS.lista().subscribe(
      data => {
        this.hards=data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.hardsS.delete(id).subscribe(
        data => {
          this.cargarHardsSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}