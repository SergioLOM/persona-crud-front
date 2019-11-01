import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDocumentoIdentidad } from '../model/tipodocumentoidentidad';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoidentidadServiceService {

  endPoint = 'http://localhost:8080/tipodocumentoidentidad/tipodociden';

  constructor(private tdiden: HttpClient) { }

  listarTipoDocumentos():Observable<TipoDocumentoIdentidad[]>{
    return this.tdiden.get<TipoDocumentoIdentidad[]>(this.endPoint)
  }
}
