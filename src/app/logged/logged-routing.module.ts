import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { QuiensoyComponent } from '../componentes/quiensoy/quiensoy.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { SidenavComponent } from '../componentes/sidenav/sidenav.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { PptComponent} from '../componentes/ppt/ppt.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { MemotestComponent } from '../componentes/memotest/memotest.component';

const routes: Routes = [
  {
    path: '', component: SidenavComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'quiensoy', component: QuiensoyComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'principal', component: PrincipalComponent },
      {
        path: 'juegos', component: JuegosComponent,
        children: [
          { path: '', component: MenuCardComponent },
          { path: 'PPT', component: PptComponent },
          { path: 'Adivina', component: AdivinaElNumeroComponent },
          { path: 'Agilidad', component: AgilidadAritmeticaComponent },
          { path: 'Anagrama', component: AnagramaComponent },
          { path: 'Tateti', component: TatetiComponent },
          { path: 'Memotest', component: MemotestComponent },
          { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
          { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
          // { path: 'Agilidad', component: AgilidadAritmeticaComponent }
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
