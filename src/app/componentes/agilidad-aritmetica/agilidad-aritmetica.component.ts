import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  private subscription: Subscription;
  ngOnInit(): void {
  }
  constructor() {
    this.ocultarVerificar = true;
    this.Tiempo = 5;
    this.nuevoJuego = new JuegoAgilidad();
    console.log('Inicio agilidad');
  }
  NuevoJuego(): void {
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      console.log('llego', this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
      }
    }, 900);

  }
  verificar(): void {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);



  }

}
