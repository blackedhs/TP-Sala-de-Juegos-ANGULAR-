import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() disparador = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  disparar(): void {
    this.disparador.emit();
  }
}
