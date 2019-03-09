import { Injectable } from '@angular/core';
import { Sugerencia, Grupo } from './sugerencia.module';

@Injectable()
export class SugerenciasService {

  private sugerencias: Sugerencia[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        CodGrupo: 0,
        Descripcion: 'Sin definir'
      },
      {
        CodGrupo: 1,
        Descripcion: 'Congreso'
      },
      {
        CodGrupo: 2,
        Descripcion: 'Conferencia'
      },
      {
        CodGrupo: 3,
        Descripcion: 'Agenda'
      },
    ];
    this.sugerencias = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getSugerencias() {
    return this.sugerencias;
  }

  agregarSugerencia(Sugerencia: Sugerencia) {
    this.sugerencias.push(Sugerencia);
  }

  nuevoSugerencia(): Sugerencia {
    return {
      CodSugerencia: this.sugerencias.length,
      Sugerencia: '',
      Calificcion: 0,
      CodGrupo: 0,
    };
  }
}
