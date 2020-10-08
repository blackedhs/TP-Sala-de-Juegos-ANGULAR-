import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit(): void {
  }
  Juego(tipo: string): void {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['juegos/Adivina']);
          break;
      case 'PPT':
          this.router.navigate(['juegos/PPT']);
          break;
      case 'Agilidad':
          this.router.navigate(['juegos/Agilidad']);
          break;
      case 'Anagrama':
          this.router.navigate(['juegos/Anagrama']);
          break;
      case 'Tateti':
          this.router.navigate(['juegos/Tateti']);
          break;
      case 'Memotest':
          this.router.navigate(['juegos/Memotest']);
          break;
      case 'secuencia':
          this.router.navigate(['juegos/secuencia']);
          break;
    }
  }
}
