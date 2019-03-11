import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaSugerenciaComponent } from './sugerencias/alta-sugerencia/alta-sugerencia.component';
import { ObjetivoComponent } from './congreso/objetivo/objetivo.component';


const routes: Routes = [
  {
    path: 'altasugerencia-component', component: AltaSugerenciaComponent
  },
  {
    path: 'objetivo-component', component: ObjetivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
