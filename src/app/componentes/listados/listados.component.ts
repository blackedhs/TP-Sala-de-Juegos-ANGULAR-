import { Component, OnInit } from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {
  public lista = [];
  constructor(public db: FiredbService) { }

  ngOnInit(): void {
    this.db.getdb('users').snapshotChanges().subscribe(elements => {
      this.lista = [];
      elements.forEach(dato =>
        this.lista.push(dato.payload.toJSON()))
    });
  }
}
