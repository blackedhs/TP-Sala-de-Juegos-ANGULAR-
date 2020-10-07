import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { Subscription } from 'rxjs';
import { Jugador } from 'src/app/clases/jugador';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { ArchivosJugadoresService } from 'src/app/servicios/archivos-jugadores.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Juego } from 'src/app/clases/juego';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  operador = '../../../assets/imagenes/agilidad/operadores.png';
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  private subscription: Subscription;

  ngOnInit(): void {
    this.db.getdb('juegos');
  }
  constructor(public db: FiredbService, public side: SidenavComponent) {
    this.ocultarVerificar = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();
    
  }
  NuevoJuego(): void {
    const oper = this.operadorAleatorio();
    this.ocultarVerificar = false;
    this.nuevoJuego.numero1 = this.numeroAleatorio();
    this.nuevoJuego.numero2 = this.numeroAleatorio();
    switch (oper) {
      case 1:
        this.nuevoJuego.numeroSecreto = this.nuevoJuego.numero1 + this.nuevoJuego.numero2;
        this.operador = '../../../assets/imagenes/agilidad/mas.png';
        break;
      case 2:
        this.nuevoJuego.numeroSecreto = this.nuevoJuego.numero1 - this.nuevoJuego.numero2;
        this.operador = '../../../assets/imagenes/agilidad/menos.png';
        break;
      case 3:
        this.nuevoJuego.numeroSecreto = this.nuevoJuego.numero1 * this.nuevoJuego.numero2;
        this.operador = '../../../assets/imagenes/agilidad/multiplicar.png';
        break;
      case 4:
        this.nuevoJuego.numeroSecreto = this.nuevoJuego.numero1 / this.nuevoJuego.numero2;
        this.operador = '../../../assets/imagenes/agilidad/dividir.png';
        break;
    }
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);
  }
  verificar(): void {
    this.nuevoJuego.verificar();
    const paraGuardar ={
      jugador: this.side.usuario.email,
      juego: this.nuevoJuego.nombre,
      resultado: this.nuevoJuego.gano
    }
    this.db.setdb(paraGuardar);
    this.Tiempo = 10;
    this.ocultarVerificar = true;
    clearInterval(this.repetidor);
  }
  numeroAleatorio(): number {
    return Math.floor((Math.random() * 100) + 1);
  }
  operadorAleatorio(): number {
    return Math.floor((Math.random() * 4) + 1);
  }
}
