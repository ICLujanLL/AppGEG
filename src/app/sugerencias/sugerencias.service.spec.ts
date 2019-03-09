import { TestBed, inject } from '@angular/core/testing';

import { SugerenciasService } from './sugerencias.service';

describe('SugerenciasService', () => {
  beforeEach(() => { 
    TestBed.configureTestingModule({
    providers: [SugerenciasService]
    });
  });

  it('should be created', inject([SugerenciasService], (service: SugerenciasService) => {
    expect(service).toBeTruthy();
  }));

});

