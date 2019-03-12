import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Personas } from './personas';


@Injectable({
  providedIn: 'root'
})

export class CrudService {
  usersRef: AngularFireList<any>;      // Reference to users list, Its an Observable
  userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
  
  constructor(private db: AngularFireDatabase) { }   // Inject AngularFireDatabase dependency in constructor
  
  // Create persona
  AddUser(persona: Personas) {
    this.usersRef.push({
      codigo: persona.$Codigo,
      nombre: persona.Nombre,
      certificado: persona.Certificado,
      perfilprofesional: persona.PerfilProfesional,
      foto: persona.Foto,
      correo: persona.Correo,
      codigociudad: persona.CodigoCiudad
    })
  }

  // Read User
  GetUser(id: number) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Read Users List
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }  

  // Update User
  UpdateUser(persona: Personas) {
    this.userRef.update({
      nombre: persona.Nombre,
      certificado: persona.Certificado,
      perfilprofesional: persona.PerfilProfesional,
      foto: persona.Foto,
      correo: persona.Correo,
      codigociudad: persona.CodigoCiudad
    })
  }  

  // Delete User
  DeleteUser(id: string) { 
    this.userRef = this.db.object('users-list/'+id);
    this.userRef.remove();
  }
  
}