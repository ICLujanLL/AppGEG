import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaSugerenciaComponent } from './sugerencias/alta-sugerencia/alta-sugerencia.component';


const routes: Routes = [
  {
    path: 'alta-sugerencia', component: AltaSugerenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
