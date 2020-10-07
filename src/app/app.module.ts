// modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoggedModule } from './logged/logged.module';
import { MaterialModule } from './Modulo/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// services
import { ArchivosJugadoresService } from './servicios/archivos-jugadores.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { JuegoServiceService } from './servicios/juego-service.service';
import { MiHttpService } from './servicios/mi-http.service';
import { PaisesService } from './servicios/paises.service';
import { FiredbService } from 'src/app/servicios/firedb.service';
// components
import { AppComponent } from './app.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { CardComponent } from './componentes/card/card.component';
import { FormLoginComponent } from './componentes/form-login/form-login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { FormRegisterComponent } from './componentes/form-register/form-register.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { Juego } from './clases/juego';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    LoginComponent,
    QuiensoyComponent,
    CardComponent,
    FormLoginComponent,
    RegistroComponent,
    SpinnerComponent,
    FormRegisterComponent,
    PrincipalComponent,
    JuegosComponent,
    ListadoComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ErrorComponent,
    MenuCardComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    AnagramaComponent,
    ListadoDeResultadosComponent,
    ListadoDePaisesComponent,
    ListadosComponent,
    PptComponent,
    TatetiComponent,
    MemotestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoggedModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ArchivosJugadoresService,
    AuthService,
    JuegoServiceService,
    MiHttpService,
    PaisesService,
    FiredbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
