import { Injectable } from '@angular/core';
import { Sugerencia, Grupo } from './sugerencia.model';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class SugerenciasService {

  private sugerencias: Sugerencia[];
  private grupos: Grupo[];
  private sugerencias$: Subject<Sugerencia[]> = new Subject<Sugerencia[]>();

  constructor() {
    this.grupos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Congreso'
      },
      {
        id: 2,
        descripcion: 'Conferencia'
      },
      {
        id: 3,
        descripcion: 'Agenda'
      },
    ];
    this.sugerencias = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getSugerencias$(): Observable<Sugerencia[]> {
    return this.sugerencias$.asObservable();
  }

  agregarSugerencia(sugerencia: Sugerencia) {
    this.sugerencias.push(sugerencia);
    this.sugerencias$.next(this.sugerencias);
  }

  nuevoSugerencia(): Sugerencia {
    return {
      id: this.sugerencias.length,
      dasugerencia: '',
      calificacion: 0,
      grupo: 0
    };
  }

  borrarSugerencia(sugerencia: Sugerencia): void {
    for (let i = 0; i < this.sugerencias.length; i++) {
      if (sugerencia === this.sugerencias[i]) {
        this.sugerencias.splice(i, 1);
        break;
      }
    }
  }

}
