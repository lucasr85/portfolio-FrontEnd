import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsHards } from 'src/app/model/skills-hards';
import { SkillsHardsService } from 'src/app/service/skills-hards.service';

@Component({
  selector: 'app-edit-hard-skills',
  templateUrl: './edit-hard-skills.component.html',
  styleUrls: ['./edit-hard-skills.component.css']
})
export class EditHardSkillsComponent implements OnInit {
  hards: SkillsHards=null;
  constructor(
    private hardsS: SkillsHardsService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardsS.details(id).subscribe(
      data => {
        this.hards = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardsS.update(id, this.hards).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}