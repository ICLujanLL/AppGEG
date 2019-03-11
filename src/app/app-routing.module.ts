import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaSugerenciaComponent } from './sugerencias/alta-sugerencia/alta-sugerencia.component';
import { ObjetivoComponent } from './congreso/objetivo/objetivo.component';
import { EjesTematicosComponent } from './congreso/ejes-tematicos/ejes-tematicos.component';

const routes: Routes = [
  {
    path: 'altasugerencia-component', component: AltaSugerenciaComponent
  },
  {
    path: 'objetivo-component', component: ObjetivoComponent
  },
  {
    path: 'eje-tematicos-component', component: EjesTematicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
