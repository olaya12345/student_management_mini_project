import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {  
  private apiUrl = 'http://localhost:3000/etudiants';
  constructor(private http:HttpClient) { }
  getEtudiants():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  addEtudiants(etudiant:any):Observable<any>{
     return this.http.post(this.apiUrl,etudiant);
  }
  updateEtudiant(id: number, etudiant: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, etudiant);
  }
  searchEtudiants(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/etudiants/search?term=${searchTerm}`);
  }
  
  deleteEtudiant(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
