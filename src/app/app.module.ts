import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';
import { MaterialModule } from './material/material.module';

// declaramos todos los componentes q usaremos
@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    ComunidadesComponent
  ],
  // importamos todos los modulos los cuales necesitaremos
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Modulo que permite cargar todos los modulos de Angular Material
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
