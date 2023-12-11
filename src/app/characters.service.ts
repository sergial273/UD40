import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://apirickmorty-production.up.railway.app/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCharacter(id:string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/'+id);
  }

  create(data: any): Observable<any>{
    return this.http.post(this.apiUrl, data)
  }

  delete(id: any): Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id)
  }
}
