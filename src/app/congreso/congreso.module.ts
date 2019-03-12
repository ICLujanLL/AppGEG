import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { EjesTematicosComponent } from './ejes-tematicos/ejes-tematicos.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { ConferencistasComponent } from './conferencistas/conferencistas.component';
import { QueesgegComponent } from './queesgeg/queesgeg.component';

@NgModule({
  declarations: [ObjetivoComponent, EjesTematicosComponent, CronogramaComponent, ConferencistasComponent, QueesgegComponent],
  imports: [
    CommonModule
  ]
})
export class CongresoModule { }
