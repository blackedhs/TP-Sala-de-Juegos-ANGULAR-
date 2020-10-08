import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public visualizar = true;
  constructor() { }

  ngOnInit(): void {
  }
  disparar(): void {
    this.visualizar = !this.visualizar;
  }
}
