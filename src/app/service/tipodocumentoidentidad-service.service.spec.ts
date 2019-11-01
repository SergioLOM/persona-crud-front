import { TestBed } from '@angular/core/testing';

import { TipodocumentoidentidadServiceService } from './tipodocumentoidentidad-service.service';

describe('TipodocumentoidentidadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipodocumentoidentidadServiceService = TestBed.get(TipodocumentoidentidadServiceService);
    expect(service).toBeTruthy();
  });
});
