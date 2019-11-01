import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  endPointListar = 'http://localhost:8080/personas/personas';
  endPointInsertar = 'http://localhost:8080/personas/persona';
  endPointEncontar = 'http://localhost:8080/personas/';
  endPointEliminar = 'http://localhost:8080/personas/';
  endPointActualizar = 'http://localhost:8080/personas/';

  HeaderJson = new HttpHeaders({'Content-type':'application/json'});
  HeaderText = new HttpHeaders({'Content-type':'text/plain'});

  persona: Observable<any>;

  constructor(private client: HttpClient) { }

  listarPersonas(): Observable<Persona[]> {
    return this.client.get<Persona[]>(this.endPointListar);
  }

  insertarPersona(persona: Persona): Observable<Persona>{
    return this.client.post<Persona>(this.endPointInsertar, persona, {headers: this.HeaderJson});
  }

  encontrarPersona(nroDocumento: string): Observable<Persona>{
    return this.client.get<Persona>(this.endPointEncontar.concat(nroDocumento).concat("/personad")) ;
  }

  eliminarPersona(id:number){
    return this.client.delete<Persona>(this.endPointEliminar.concat(id.toString()).concat("/persona"),{headers: this.HeaderText})
 }

  actualizarPersona(persona: Persona, id: number): Observable<Persona>{
    //const id= persona.id;
    return this.client.put<Persona>(this.endPointActualizar.concat(id.toString()).concat("/persona"), persona, {headers: this.HeaderJson})
  }

}
