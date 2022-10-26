import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsSofts } from 'src/app/model/skills-softs';
import { SkillsSoftsService } from 'src/app/service/skills-softs.service';

@Component({
  selector: 'app-edit-soft-skills',
  templateUrl: './edit-soft-skills.component.html',
  styleUrls: ['./edit-soft-skills.component.css']
})
export class EditSoftSkillsComponent implements OnInit {
  softs: SkillsSofts=null;
  constructor(
    private softsS: SkillsSoftsService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softsS.details(id).subscribe(
      data => {
        this.softs = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.softsS.update(id, this.softs).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}