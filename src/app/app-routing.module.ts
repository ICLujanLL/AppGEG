import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaSugerenciaComponent } from './sugerencias/alta-sugerencia/alta-sugerencia.component';
import { ObjetivoComponent } from './congreso/objetivo/objetivo.component';
import { EjesTematicosComponent } from './congreso/ejes-tematicos/ejes-tematicos.component';

import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'altasugerencia-component', component: AltaSugerenciaComponent
  },
  {
    path: 'objetivo-component', component: ObjetivoComponent
  },
  {
    path: 'ejestematicos-component', component: EjesTematicosComponent
  },
  { path:  'login',component:  LoginComponent},
  { path:  'register', component:  RegisterComponent },
  { path:  'forgot-password', component:  ForgotPasswordComponent },
  { path:  'verify-email', component:  VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
