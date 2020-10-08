import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-repite-la-secuencia',
  templateUrl: './repite-la-secuencia.component.html',
  styleUrls: ['./repite-la-secuencia.component.css']
})
export class RepiteLaSecuenciaComponent implements OnInit {
  public combinaciones = [
    [1, 2, 2, 3, 4, 4, 1],
    [2, 3, 3, 4, 1, 4, 4],
    [3, 3, 4, 4, 3, 3, 1],
    [3, 1, 4, 3, 3, 2, 2],
    [1, 1, 1, 2, 2, 3, 4]
  ]
  public random = this.numRandom();
  public miTurno = false;
  public resultado = 0;
  public veces = 1;
  public tiempo = 5;
  public intervalo: any;
  public intervaloTiempo: any;
  public btn1 = new Audio();
  public btn2 = new Audio();
  public btn3 = new Audio();
  public btn4 = new Audio();
  public contadorCpu = 0;
  public contadorUser = 0;
  public btn1Class = 'btn btn-outline-danger button mx-2';
  public btn2Class = 'btn btn-outline-warning button mx-2';
  public btn3Class = 'btn btn-outline-success button mx-2';
  public btn4Class = 'btn btn-outline-info button mx-2';
  constructor(public db: FiredbService, public side: SidenavComponent) { }

  ngOnInit(): void {
    this.db.getdb('juegos');
    this.btn1.src = '../../assets/sonidos/1.mp3';
    this.btn2.src = '../../assets/sonidos/2.mp3';
    this.btn3.src = '../../assets/sonidos/3.mp3';
    this.btn4.src = '../../assets/sonidos/4.mp3';
  }
  onComenzar() {
    this.intervalo = setInterval(() => {
      if (this.contadorCpu != this.veces) {
        const x = this.combinaciones[this.random][this.contadorCpu];
        this.prenderBtn(x);
        this.contadorCpu++;
      } else {
        this.contadorCpu = 0;
        this.miTurno = true;
        clearInterval(this.intervalo);
        this.intervaloTiempo = setInterval(() => {
          this.tiempo--
          if (this.tiempo == 0)
            this.termino(false);
        }, 900);
      }
    }, 3000);

  }
  clickButton(btn: number) {
    if (this.miTurno) {
      this.prenderBtn(btn);
      if (this.combinaciones[this.random][this.contadorUser] == btn) {
        this.contadorUser++;
        this.tiempo = 5;
        if (this.contadorUser == 6) {
          this.termino(true);
        } else
          if (this.veces == this.contadorUser) {
            this.veces++;
            console.log('ak');
            this.miTurno = false;
            this.onComenzar();
            clearInterval(this.intervaloTiempo);
            this.contadorUser = 0;
          }
      } else {
        this.termino(false);
      }
    }
  }
  termino(resultado: boolean) {
    clearInterval(this.intervaloTiempo);
    this.miTurno = false;
    this.tiempo = 5;
    this.contadorCpu = 0;
    this.contadorUser = 0;
    console.log(resultado);
    this.random = this.numRandom();
    if (resultado) {
      this.resultado = 1;
    } else {
      this.resultado = 2;
    }
    this.db.setdb({
      juego: 'Repite la secuencia',
      jugador: this.side.usuario.email,
      resultado: resultado
    });
    setTimeout(() => this.resultado = 0, 2500);
  }

  prenderBtn(btn: number) {
    switch (btn) {
      case 1:
        this.onBtn1();
        break;
      case 2:
        this.onBtn2();
        break;
      case 3:
        this.onBtn3();
        break;
      case 4:
        this.onBtn4();
        break;
    }
  }
  onBtn1() {
    this.btn1.play();
    this.btn1Class = "btn btn-danger button mx-2 ";
    setTimeout(() => this.btn1Class = 'btn btn-outline-danger button mx-2', 1000);
  }
  onBtn2() {
    this.btn2.play();
    this.btn2Class = "btn btn-warning button mx-2 ";
    setTimeout(() => this.btn2Class = 'btn btn-outline-warning button mx-2', 1000);
  }
  onBtn3() {
    this.btn3.play();
    this.btn3Class = "btn btn-success button mx-2 ";
    setTimeout(() => this.btn3Class = 'btn btn-outline-success button mx-2', 1000);
  }
  onBtn4() {
    this.btn4.play();
    this.btn4Class = "btn btn-info button mx-2 ";
    setTimeout(() => this.btn4Class = 'btn btn-outline-info button mx-2', 1000);
  }
  numRandom() {
    return Math.floor((Math.random() * 4) + 1);
  }
}
