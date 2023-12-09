import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5'; // Reemplaza con la URL real de tu API

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCharacter(id:string): Observable<any[]> {
    return this.http.get<any[]>('https://rickandmortyapi.com/api/character/'+id);
  }
}
