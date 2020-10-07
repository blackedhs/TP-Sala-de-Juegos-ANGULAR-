import { Juego } from './juego';

export class JuegoAgilidad extends Juego {
    numeroSecreto = 0;
    numeroIngresado = 0;
    numero1 = 0;
    numero2 = 0;
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Velocidad Aritmetica', gano, jugador);
    }
    public verificar(): boolean {
        if (this.numeroIngresado === this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
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
