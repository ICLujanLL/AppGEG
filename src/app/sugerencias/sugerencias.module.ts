import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SugerenciasService } from './sugerencias.service';
import { AltaSugerenciaComponent } from './alta-sugerencia/alta-sugerencia.component';
import { ListadoSugerenciasComponent } from './listado-sugerencias/listado-sugerencias.component';
import { ItemSugerenciaComponent } from './item-sugerencia/item-sugerencia.component';
import { CuadroComponent } from './alta-sugerencia/cuadro/cuadro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AltaSugerenciaComponent,
    ListadoSugerenciasComponent,
    ItemSugerenciaComponent,
    CuadroComponent
  ],
  exports: [
    AltaSugerenciaComponent,
    ListadoSugerenciasComponent
  ], 
  providers: [
    SugerenciasService
  ]
})
export class SugerenciasModule { }
