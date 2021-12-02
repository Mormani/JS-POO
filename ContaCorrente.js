import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;

    /* Atributo Privado */
    #saldo = 0;
    #cliente;

    set cliente(novoValor) { if(novoValor instanceof Cliente) this.#cliente = novoValor; }
    get cliente() { return this.#cliente }

    get saldo() { return this.#saldo }

    depositar(valor) { if(valor > 0) this.#saldo += valor; }
    sacar(valor) { if(this.#saldo >= valor) this.#saldo -= valor; }
}