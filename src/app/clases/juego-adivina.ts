import { Juego } from '../clases/juego';

export class JuegoAdivina extends Juego {
  numeroSecreto = 0;
  numeroIngresado = 0;
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Adivina el número', gano, jugador);
  }
  public verificar(): boolean {
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
    }
    return this.gano;
  }
  public generarnumero(): void {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.log('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }
  public retornarAyuda(): string {
    if (this.numeroIngresado < this.numeroSecreto) {
      return 'Falta';
    }
    return 'Te pasate';
  }
}
