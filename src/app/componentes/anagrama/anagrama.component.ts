import { Component, OnInit } from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  public palabras = [
    ['N', 'N', 'N', 'E', 'P', 'I', 'D', 'D', 'I', 'E', 'E', 'T', 'E'],
    ['A', 'O', 'B', 'C'],
    ['V', 'I', 'R', 'R', 'E'],
    ['I', 'N', 'C', 'A', 'R', 'G'],
    ['Z', 'E', 'V', 'E', 'L']
  ]
  public resPalabras = ['independiente','boca','river','racing','velez'];
  public palabra: string[];
  public respuesta: string = '';
  public tiempo: number = 10;
  public acerto = 0;
  public gano: boolean;
  public empezo = false;
  public intervalo: any;
  public numRandom = Math.floor((Math.random() * 4) + 1);
  constructor(public db: FiredbService, public side: SidenavComponent) { }

  ngOnInit(): void {
    this.db.getdb('juegos');
  }
  onEmpezar() {
    this.palabra = this.palabras[this.numRandom];
    this.empezo = true;
    this.intervalo = setInterval(() => {
      this.tiempo--;
      if(this.tiempo == 0){
        clearInterval(this.intervalo);
        this.tiempo = 10;
        this.onVerificar();
      }
    }, 900);
  }
  onVerificar(){
    clearInterval(this.intervalo);
    this.tiempo = 10;
    if ( this.respuesta.toLowerCase() == this.resPalabras[this.numRandom].toLowerCase()){
        this.gano = true;
        this.acerto = 1;
      }
      else{
        this.gano=false;
        this.acerto = 2;
    }
    this.db.setdb({
      juego: 'Anagrama',
      jugador: this.side.usuario.email,
      resultado: this.gano
    });
    setTimeout( () => this.acerto = 0,1500);
    this.numRandom = Math.floor((Math.random() * 4) + 1);
  }
}