import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';

import { SugerenciasModule } from './sugerencias/sugerencias.module';


// declaramos todos los componentes q usaremos
@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    ComunidadesComponent,
  ],
  // importamos todos los modulos los cuales necesitaremos
  imports: [
    // Para integrar con angular firebase
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // Para el ejemplo de la nube de palabras
    // TagCloudModule,
    // Modulo que permite el manejo de formularios
    FormsModule,
    // Modulo que permite realizar peticiones sobre http
    HttpClientModule,
    BrowserModule,
    SugerenciasModule,
    AppRoutingModule,
    // Modulo que permite el manejo de formulario reactivos
    ReactiveFormsModule,  
    BrowserAnimationsModule,
    MatNativeDateModule,
    // Modulo que permite cargar todos los modulos de Angular Material
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
