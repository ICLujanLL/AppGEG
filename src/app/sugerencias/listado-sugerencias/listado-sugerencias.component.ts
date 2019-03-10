import { Sugerencia, Grupo } from '../sugerencia.model';
import { SugerenciasService } from './../sugerencias.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-listado-sugerencias',
  templateUrl: './listado-sugerencias.component.html',
  styleUrls: ['./listado-sugerencias.component.css']
})
export class ListadoSugerenciasComponent implements OnInit, OnDestroy {
  sugerencias: Sugerencia[] = [];
  sugerencias$: Observable<Sugerencia[]>;
  sugerenciaSubscription: Subscription;

  constructor(private sugerenciasService: SugerenciasService) { }

  ngOnInit() {
    this.sugerencias$ = this.sugerenciasService.getSugerencias$();
    this.sugerenciaSubscription = this.sugerencias$.subscribe(sugerencias => this.sugerencias = sugerencias);
  }

  doBorrarSugerencia(sugerencia: Sugerencia) {
    console.log('yeah!', sugerencia);
    this.sugerenciasService.borrarSugerencia(sugerencia);
  }

  ngOnDestroy() {
    this.sugerenciaSubscription.unsubscribe();
  }
}
