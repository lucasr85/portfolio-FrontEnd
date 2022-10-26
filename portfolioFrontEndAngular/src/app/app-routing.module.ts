import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditHardSkillsComponent } from './components/skills/edit-hard-skills.component';
import { EditSoftSkillsComponent } from './components/skills/edit-soft-skills.component';
import { NewHardSkillsComponent } from './components/skills/new-hard-skills.component';
import { NewSoftSkillsComponent } from './components/skills/new-soft-skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp',component: NewExperienciaComponent},
  { path: 'editexp/:id',component: EditExperienciaComponent},
  { path: 'nuevaeduc',component: NeweducacionComponent},
  { path: 'editeduc/:id',component: EditeducacionComponent},
  { path: 'nuevaskillhards',component: NewHardSkillsComponent},
  { path: 'editskillhards/:id', component: EditHardSkillsComponent},
  { path: 'nuevaskillsofts',component: NewSoftSkillsComponent},
  { path: 'editskillsofts/:id', component: EditSoftSkillsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
