import { Component, OnInit } from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  public cuadrados: any[];
  public xIsNext: boolean;
  public ganador: string;
  public ganaste = 0;
  constructor(public db: FiredbService, public side: SidenavComponent) { }

  ngOnInit() {
    this.nuevoJuego();
    this.db.getdb('juegos');
  }

  nuevoJuego() {
    this.cuadrados = Array(9).fill(null);
    this.ganador = null;
    this.xIsNext = true;

  }

  get turno() {
    return this.xIsNext ? 'X' : 'O';
  }

  clickButton(idx: number) {
    if (!this.cuadrados[idx]) {
      this.cuadrados.splice(idx, 1, this.turno);
      this.xIsNext = !this.xIsNext;
    }
    this.ganador = this.verificar();
    if (this.ganador == "X") {
      this.ganaste = 1;
      setTimeout(() => {
        this.nuevoJuego();
        this.ganaste = 0
      }, 2500);
      this.db.setdb({
        juego: 'Ta-Te-Ti',
        jugador: this.side.usuario.email,
        resultado: true
      });
    } else if (this.ganador == "O") {
      this.ganaste = 2;
      setTimeout(() => {
        this.nuevoJuego();
        this.ganaste = 0
      }, 2500);
      this.db.setdb({
        juego: 'Ta-Te-Ti',
        jugador: this.side.usuario.email,
        resultado: false
      });
    }
  }

  verificar() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [7, 8, 9],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.cuadrados[a] &&
        this.cuadrados[a] === this.cuadrados[b] &&
        this.cuadrados[a] === this.cuadrados[c]
      ) {
        return this.cuadrados[a];
      }
    }
    return null
  }
}


