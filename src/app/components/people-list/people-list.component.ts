import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../../service/persona-service.service';
import { Persona } from '../../model/persona';
import { TipodocumentoidentidadServiceService } from 'src/app/service/tipodocumentoidentidad-service.service';
import { TipoDocumentoIdentidad } from 'src/app/model/tipodocumentoidentidad';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  personas: Persona[] = [];
  personaSeleccionada: Persona = new Persona();
  persona: Persona = new Persona();
  tiposDocumentoIdentidad: TipoDocumentoIdentidad[] = [];


  constructor(private personaService: PersonaServiceService, private tipoDocumentoIdentidadService: TipodocumentoidentidadServiceService,  private router: Router, private location: Location) { }

  ngOnInit() {
    this.personaService.listarPersonas().subscribe(
      personas => {
          this.personas = personas;
      }
    );
    this.tipoDocumentoIdentidadService.listarTipoDocumentos().subscribe(
      (tiposDocumentoIdentidad) => {
        this.tiposDocumentoIdentidad = tiposDocumentoIdentidad;
      }
    );
  }

  showModal(persona: Persona){
    this.personaSeleccionada = persona;
  }

  eliminarPersona(id: number){
    this.personaService.eliminarPersona(id).subscribe(
      _=>{
        this.personas=this.personas.filter(
          persona => persona != this.personaSeleccionada
        );
      }
    )
  }

  actualizarPersona(persona: Persona){
    this.personaService.actualizarPersona(persona, persona.id).subscribe(
      _=>{
         location.reload();
      }
    )
  }

}
