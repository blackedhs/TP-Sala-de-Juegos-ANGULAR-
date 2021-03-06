import { Injectable } from '@angular/core';
import { JuegoAdivina } from '../clases/juego-adivina.js';
import { MiHttpService } from './mi-http.service';

@Injectable()
export class JuegoServiceService {

  peticion: any;
  constructor(public miHttp: MiHttpService) {
    this.peticion = this.miHttp.httpGetO('http://localhost:3003');
    //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  public listar(): Array<JuegoAdivina> {
    this.miHttp.httpGetP('https://restcountries.eu/rest/v2/all')
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });


    this.peticion
      .subscribe(data => {
        console.log('En listar');
        console.log(data);
      }, err => {
        console.log('error: ', err);
      });

    const miArray: Array<JuegoAdivina> = new Array<JuegoAdivina>();

    miArray.push(new JuegoAdivina('Juego 1', false));
    miArray.push(new JuegoAdivina('Pepe', true));
    miArray.push(new JuegoAdivina('Juego 3', false));
    miArray.push(new JuegoAdivina('Juego 4', false));
    miArray.push(new JuegoAdivina('Juego 5', false));
    miArray.push(new JuegoAdivina('Juego 6', false));
    return miArray;
  }

  public listarP(): Promise<Array<JuegoAdivina>> {
    this.peticion
      .subscribe(data => {
        console.log('En listarPromesa');
        console.log(data);
      }, err => {
        console.log(err);
      });
    const promesa: Promise<Array<JuegoAdivina>> = new Promise((resolve, reject) => {
      const miArray: Array<JuegoAdivina> = new Array<JuegoAdivina>();
      miArray.push(new JuegoAdivina('JuegoPromesa 1', false, 'promesa'));
      miArray.push(new JuegoAdivina('PepePromesa', true));
      miArray.push(new JuegoAdivina('JuegoPromesa 3', false));
      miArray.push(new JuegoAdivina('JuegoPromesa 4', false));
      miArray.push(new JuegoAdivina('JuegoPromesa 5', false));
      miArray.push(new JuegoAdivina('JuegoPromesa 6', false));
      resolve(miArray);
    });

    return promesa;
  }

}
