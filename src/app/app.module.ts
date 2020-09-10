import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { LoginComponent } from './componentes/login/login.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AdivinaMasListadoComponent,
    AgilidadAritmeticaComponent,
    AgilidadMasListadoComponent,
    AnagramaComponent,
    CabeceraComponent,
    ErrorComponent,
    InputJugadoresComponent,
    JuegosComponent,
    JugadoresListadoComponent,
    ListadoComponent,
    ListadoDePaisesComponent,
    ListadoDeResultadosComponent,
    ListadosComponent,
    LoginComponent,
    MapaDeGoogleComponent,
    MenuComponent,
    MenuCardComponent,
    PrincipalComponent,
    QuienSoyComponent,
    RegistroComponent,
    SexoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
