import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  nuevoJuego: JuegoAdivina;
  mensaje: string;
  contador: number;
  ocultarVerificar: boolean;


  constructor() {
    this.nuevoJuego = new JuegoAdivina();
    console.log('numero Secreto:', this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar = true;
  }
  generarnumero(): void {
    this.nuevoJuego.generarnumero();
    this.contador = 0;
    this.ocultarVerificar = false;
  }

  verificar(): void {
    this.contador++;
    console.log('numero Secreto:', this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {
      this.nuevoJuego.numeroSecreto = 0;
      this.ocultarVerificar = true;
    } else {
      switch (this.contador) {
        case 1:
          this.mensaje = 'No, intento fallido, animo';
          break;
        case 2:
          this.mensaje = 'No,Te estaras Acercando???';
          break;
        case 3:
          this.mensaje = 'No es, Yo crei que la tercera era la vencida.';
          break;
        case 4:
          this.mensaje = 'No era el  ' + this.nuevoJuego.numeroIngresado;
          break;
        case 5:
          this.mensaje = ' intentos y nada.';
          break;
        case 6:
          this.mensaje = 'Afortunado en el amor';
          break;
        default:
          this.mensaje = 'Ya le erraste ' + this.contador + ' veces';
          break;
      }
    }
    console.log('numero Secreto:', this.nuevoJuego.gano);
  }
  ngOnInit(): void {
  }

}
