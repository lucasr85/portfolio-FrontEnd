import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsSofts } from '../model/skills-softs';

@Injectable({
  providedIn: 'root'
})
export class SkillsSoftsService {
  URL='http://localhost:8080/sskill/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<SkillsSofts[]>{
    return this.httpClient.get<SkillsSofts[]>(this.URL+'lista');
  }

  public details(id: number): Observable<SkillsSofts>{
    return this.httpClient.get<SkillsSofts>(this.URL + `detail/${id}`);
  }

  public save(hards: SkillsSofts): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create',hards);
  }

  public update (id: number,hards: SkillsSofts): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,hards);
  } 

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}