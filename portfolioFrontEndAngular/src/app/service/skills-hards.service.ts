import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsHards } from '../model/skills-hards';

@Injectable({
  providedIn: 'root'
})
export class SkillsHardsService {
  URL='http://localhost:8080/hskill/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<SkillsHards[]>{
    return this.httpClient.get<SkillsHards[]>(this.URL+'lista');
  }

  public details(id: number): Observable<SkillsHards>{
    return this.httpClient.get<SkillsHards>(this.URL + `detail/${id}`);
  }

  public save(hards: SkillsHards): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create',hards);
  }

  public update (id: number,hards: SkillsHards): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,hards);
  } 

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}