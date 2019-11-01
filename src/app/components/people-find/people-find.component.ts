import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../../service/persona-service.service';
import { Persona } from '../../model/persona';
import { TipoDocumentoIdentidad } from 'src/app/model/tipodocumentoidentidad';
import { TipodocumentoidentidadServiceService } from 'src/app/service/tipodocumentoidentidad-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-find',
  templateUrl: './people-find.component.html',
  styleUrls: ['./people-find.component.css']
})
export class PeopleFindComponent implements OnInit {

  persona: Persona = new Persona();
  tiposDocumentoIdentidad: TipoDocumentoIdentidad[] = [];

  constructor(private personaService: PersonaServiceService, private tipoDocumentoIdentidadService: TipodocumentoidentidadServiceService, private router: Router) { }

  ngOnInit() {
    this.tipoDocumentoIdentidadService.listarTipoDocumentos().subscribe(
      (tiposDocumentoIdentidad) => {
        this.tiposDocumentoIdentidad = tiposDocumentoIdentidad;
      }
    );
  }

  encontrarPersona(nroDocumento: string){
    this.personaService.encontrarPersona(nroDocumento).subscribe(
      persona => {
        this.persona = persona;
      }
    )
  }

}
