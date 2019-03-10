import { Sugerencia } from './../sugerencia.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-sugerencia',
  templateUrl: './item-sugerencia.component.html',
  styleUrls: ['./item-sugerencia.component.css']
})

export class ItemSugerenciaComponent implements OnInit {

  @Input()
  sugerencia: Sugerencia;

  @Output()
  borrarSugerencia = new EventEmitter<Sugerencia>();

  onBorrarSugerencia() {
    this.borrarSugerencia.emit(this.sugerencia);
  }

  constructor() { }

  ngOnInit() {
  }

}
