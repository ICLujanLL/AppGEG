import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaSugerenciaComponent } from './sugerencias/alta-sugerencia/alta-sugerencia.component';
import { ObjetivoComponent } from './congreso/objetivo/objetivo.component';
import { EjesTematicosComponent } from './congreso/ejes-tematicos/ejes-tematicos.component';
import { QueesgegComponent } from './congreso/queesgeg/queesgeg.component';
import { LoginComponent } from './admin/login/login.component';



const routes: Routes = [
  {
    path: 'altasugerencia-component', component: AltaSugerenciaComponent
  },
  {
    path: 'queesgeg-component', component: QueesgegComponent
  },
  {
    path: 'objetivo-component', component: ObjetivoComponent
  },
  {
    path: 'ejestematicos-component', component: EjesTematicosComponent
  },
  { path:  'login',component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
