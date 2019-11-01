import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { TipoDocumentoIdentidad } from 'src/app/model/tipodocumentoidentidad';
import { PersonaServiceService } from 'src/app/service/persona-service.service';
import { TipodocumentoidentidadServiceService } from 'src/app/service/tipodocumentoidentidad-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-registry',
  templateUrl: './people-registry.component.html',
  styleUrls: ['./people-registry.component.css']
})
export class PeopleRegistryComponent implements OnInit {

  
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

  insertarPersona(){
    this.personaService.insertarPersona(this.persona).subscribe(
      _ =>  {
        this.router.navigate(["/people-list"]);
      }
    )
  }

}
