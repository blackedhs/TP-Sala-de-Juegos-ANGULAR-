
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { FiredbService } from 'src/app/servicios/firedb.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input() listado = [];
  constructor(public db: FiredbService) { }

  ngOnInit(): void {
  }
}
