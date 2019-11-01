import { TipoDocumentoIdentidad } from './tipodocumentoidentidad';

export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  nroDocumento: string;
  telefono: string;
  tipoDocumentoIdentidad = new TipoDocumentoIdentidad();
}


