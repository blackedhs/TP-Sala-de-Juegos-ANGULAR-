import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FiredbService {
  public lista: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) { }
  getdb(coleccion: string){
    this.lista = this.db.list(coleccion);
    return this.lista;
  }
  setdb(objeto: object){
    this.lista.push(objeto);
  }
  updatedb(key: string, objeto: object){
    this.lista.update(key,objeto);
  }
  deletedb(key: string){
    this.lista.remove(key);
  }
}
