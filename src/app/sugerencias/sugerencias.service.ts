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

  getSugerencias$(): Observable<Sugerencia[]> {
    return this.sugerencias$.asObservable();
  }

  agregarSugerencia(sugerencia: Sugerencia) {
    this.sugerencias.push(sugerencia);
    this.sugerencias$.next(this.sugerencias);
  }

  nuevoSugerencia(): Sugerencia {
    return {
      CodSugerencia: this.sugerencias.length,
      DaSugerencia: '',
      Calificacion: 0,
      CodGrupo: 0
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
