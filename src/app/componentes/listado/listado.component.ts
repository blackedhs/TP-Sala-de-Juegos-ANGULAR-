import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from 'src/app/servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  // public listadoParaCompartir: Array<any>;
  //  miServicioJuego: JuegoServiceService;

  constructor() {
  // constructor(servicioJuego: JuegoServiceService) {
    // this.miServicioJuego = servicioJuego;
  }
  ngOnInit(): void {
  }

  llamaService(): void{
    // console.log('llamaService');
    // this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa(): void{
    // console.log('llamaServicePromesa');
    // this.miServicioJuego.listarPromesa().then((listado) => {
    //     this.listadoParaCompartir = listado;
    // });
  }
}
