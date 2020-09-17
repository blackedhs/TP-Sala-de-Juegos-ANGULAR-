import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  miServicioJuego: JuegoServiceService;

  constructor(servicioJuego: JuegoServiceService) {
    this.miServicioJuego = servicioJuego;

  }

  ngOnInit(): void {

  }

  llamaService(): void {
    console.log('llamaService');
    this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa(): void {
    console.log('llamaServicePromesa');
    this.miServicioJuego.listarP().then((listado) => {
      this.listadoParaCompartir = listado;
    });
  }
}
