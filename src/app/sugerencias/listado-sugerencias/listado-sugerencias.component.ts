import { Sugerencia, Grupo } from '../sugerencia.model';
import { SugerenciasService } from './../sugerencias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-sugerencias',
  templateUrl: './listado-sugerencias.component.html',
  styleUrls: ['./listado-sugerencias.component.css']
})
export class ListadoSugerenciasComponent implements OnInit {

  sugerencias: Sugerencia[];
  constructor(private sugerenciasService: SugerenciasService) { }

  ngOnInit() {
    this.sugerencias = this.sugerenciasService.getSugerencias();
  }

}
