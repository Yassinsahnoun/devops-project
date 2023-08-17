import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Stage } from './stage';
import { Etudiant } from './etudiant';


@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseURL = "http://localhost:9090/api/v1";

  constructor(private httpClient: HttpClient) { }
  
  public getStagesList(): Observable<Stage[]>{
    return this.httpClient.get<Stage[]>(`${this.baseURL}/stage`);
  }

 public  addStage(stage: Stage): Observable<Stage>{
    return this.httpClient.post<Stage>(`${this.baseURL}/stage`, stage);
  }

  public  updateStage(stage: Stage ): Observable<Stage>{
    return this.httpClient.put<Stage>(`${this.baseURL}/stage`, stage);
  }

  public  deleteStage(stageId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/stage/${stageId}`);
  }

  public getEtudiantList(): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(`${this.baseURL}/etudiant`);
  }
  public getEtudiantById(etudId: number): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(`${this.baseURL}/etudiant/${etudId}`);
  }

  public  addEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    return this.httpClient.post<Etudiant>(`${this.baseURL}/etudiant`, etudiant);
  }
  public  updateEtudiant(etudiant: Etudiant ): Observable<Etudiant>{
    return this.httpClient.put<Etudiant>(`${this.baseURL}/etudiant`, etudiant);
  }

  public  deleteEtudiant(etudId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/etudiant/${etudId}`);
  }

}
