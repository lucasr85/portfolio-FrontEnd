import { Component, OnInit } from '@angular/core';
import { SkillsHards } from 'src/app/model/skills-hards';
import { SkillsSofts } from 'src/app/model/skills-softs';
import { SkillsHardsService } from 'src/app/service/skills-hards.service';
import { SkillsSoftsService } from 'src/app/service/skills-softs.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hards: SkillsHards[]=[];
  softs: SkillsSofts[]=[];

  constructor(private hardsS: SkillsHardsService, private softsS: SkillsSoftsService, private tokenService: TokenService) {}
  isLogged =false;

  ngOnInit(): void {
    this.cargarHardsSkill();
    this.cargarSoftsSkill();
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
  cargarSoftsSkill(): void{
    this.softsS.lista().subscribe(
      data => {
        this.softs=data;
      }
    )
  }

  deleteHards(id?: number){
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

  deleteSofts(id?: number){
    if(id != undefined){
      this.softsS.delete(id).subscribe(
        data => {
          this.cargarSoftsSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}