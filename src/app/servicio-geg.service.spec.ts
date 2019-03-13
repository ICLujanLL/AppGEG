import { TestBed } from '@angular/core/testing';

import { ServicioGEGService } from './servicio-geg.service';

describe('ServicioGEGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioGEGService = TestBed.get(ServicioGEGService);
    expect(service).toBeTruthy();
  });
});

this.afAuth.authState.subscribe(user => {
  if (user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  } else {
    localStorage.setItem('user', null);
  }
});

