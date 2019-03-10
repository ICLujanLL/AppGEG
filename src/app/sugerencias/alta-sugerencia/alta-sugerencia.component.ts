import { Grupo, Sugerencia } from '../sugerencia.model';
import { SugerenciasService } from './../sugerencias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-sugerencia',
  templateUrl: './alta-sugerencia.component.html',
  styleUrls: ['./alta-sugerencia.component.css']
})
export class AltaSugerenciaComponent implements OnInit {

  sugerencia: Sugerencia;
  grupos: Grupo[];

  constructor(private sugerenciasService: SugerenciasService) { }

  ngOnInit() {
    this.sugerencia = this.sugerenciasService.nuevoSugerencia();
    this.grupos = this.sugerenciasService.getGrupos();
  }

  nuevoSugerencia(): void {
    this.sugerenciasService.agregarSugerencia(this.sugerencia);
    this.sugerencia = this.sugerenciasService.nuevoSugerencia();
  }
}
