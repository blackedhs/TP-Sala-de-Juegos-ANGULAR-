import { Component, OnInit } from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoO = [];
  public listado = [];
  public select = 'Todos';
  constructor(public db: FiredbService) {
  }

  ngOnInit(): void {
    this.db.getdb('juegos').snapshotChanges().subscribe(elements => {
      elements.forEach(dato => {
        this.listadoO.push(dato.payload.toJSON());
      });
      this.listadoO.forEach(element => {
        if (element.resultado)
          element.resultado = 'Gano'
        else
          element.resultado = 'Perdio'
      });
    });
    this.listado = this.listadoO;
  }
  onFilter() {
    if (this.select == '' || this.select == 'Todos')
      this.listado = this.listadoO;
    else
      this.listado = this.listadoO.filter(element =>
        element.juego == this.select);
  }
}
