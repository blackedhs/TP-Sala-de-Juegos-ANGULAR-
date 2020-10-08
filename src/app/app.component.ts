import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sala de juegos';
}
