import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  nuevoJuego: JuegoAdivina;
  mensaje: string = 'SUERTE';
  contador: number;
  ocultarVerificar: boolean;


  constructor(public db: FiredbService, public side: SidenavComponent) {
    this.nuevoJuego = new JuegoAdivina();
    this.ocultarVerificar = true;
  }
  generarnumero(): void {
    this.nuevoJuego.generarnumero();
    console.log('numero Secreto: ', this.nuevoJuego.numeroSecreto);
    this.contador = 0;
    this.ocultarVerificar = false;
    this.mensaje = 'AUN NO ADIVIDINO :D '
  }

  verificar(): void {
    this.contador++;
    if (this.nuevoJuego.verificar()) {
      this.nuevoJuego.numeroSecreto = 0;
      this.ocultarVerificar = true;
      this.db.setdb({
        juego: 'Adivina el numero',
        jugador: this.side.usuario.email,
        resultado: true
      });
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
        default:
          this.mensaje = 'Ya le erraste ' + this.contador + ' veces estas fuera ';
          this.nuevoJuego.numeroSecreto = 0;
          this.ocultarVerificar = true;
          this.db.setdb({
            juego: 'Adivina el numero',
            jugador: this.side.usuario.email,
            resultado: false
          });
          break;
      }
      this.mensaje = this.mensaje + '  ------------>>> ' + this.nuevoJuego.retornarAyuda();
    }
  }
  ngOnInit(): void {
    this.db.getdb('juegos');
  }

}
