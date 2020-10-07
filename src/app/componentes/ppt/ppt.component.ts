import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  showScore = false;
  scoreTu = 0;
  scoreCpu = 0;
  resultado: string;
  tu = '../../../assets/imagenes/PPT/tijeras.png';
  cpu = '../../../assets/imagenes/PPT/tijeras.png';
  constructor(public db: FiredbService, public side: SidenavComponent) { }

  ngOnInit(): void {
    this.db.getdb('juegos');
  }
  verificar(eleccion: string): void {
    this.showScore = true;
    switch (eleccion) {
      case 'piedra':
        this.tu = '../../../assets/imagenes/PPT/piedra.jpg';
        break;
      case 'papel':
        this.tu = '../../../assets/imagenes/PPT/papel.jpg';
        break;
      case 'tijeras':
        this.tu = '../../../assets/imagenes/PPT/tijeras.png';
    }
    switch (this.numeroAleatorio()) {
      case 1:
        this.cpu = '../../../assets/imagenes/PPT/piedra.jpg';
        if (eleccion === 'piedra') {
          this.resultado = 'EMPATE!!!';
        } else if (eleccion === 'papel') {
          this.resultado = 'GANASTE!!!';
        } else {
          this.resultado = 'PERDISTE!!!!';
        }
        break;
      case 2:
        this.cpu = '../../../assets/imagenes/PPT/papel.jpg';
        if (eleccion === 'piedra') {
          this.resultado = 'PERDISTE!!!!';
        } else if (eleccion === 'papel') {
          this.resultado = 'EMPATE!!!';
        } else {
          this.resultado = 'GANASTE!!!';
        }
        break;
      case 3:
        this.cpu = '../../../assets/imagenes/PPT/tijeras.png';
        if (eleccion === 'piedra') {
          this.resultado = 'GANASTE!!!';
        } else if (eleccion === 'papel') {
          this.resultado = 'PERDISTE!!!!';
        } else {
          this.resultado = 'EMPATE!!!';
        }
        break;
    }
    if (this.resultado === 'GANASTE!!!') {
      this.scoreTu++;
    } else if (this.resultado === 'PERDISTE!!!!') {
      this.scoreCpu++;
    }
    if (this.scoreTu == 3) {
      this.resultado = ' ERES EL GANADOR DE LA RONDA';
      this.scoreCpu = 0;
      this.scoreTu = 0;
      this.db.setdb({
        juego: 'Piedra Papel o Tijeras',
        jugador: this.side.usuario.email,
        resultado: true
      });
    } else if (this.scoreCpu == 3) {
      this.resultado = ' PERDISTE LA RONDA';
      this.scoreCpu = 0;
      this.scoreTu = 0;
      this.db.setdb({
        juego: 'Piedra Papel o Tijeras',
        jugador: this.side.usuario.email,
        resultado: false
      });
    }

  }
  numeroAleatorio(): number {
    return Math.floor((Math.random() * 3) + 1);
  }
}
