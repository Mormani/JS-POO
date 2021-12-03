import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numDeContas = 0;
    agencia;

    /* Atributo Privado */
    #saldo = 0;
    #cliente;

    set cliente(novoValor) { if(novoValor instanceof Cliente) this.#cliente = novoValor; }
    get cliente() { return this.#cliente }

    get saldo() { return this.#saldo }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numDeContas++;
    }

    depositar(valor) {

        if(valor <= 0) { return; }

        return this.#saldo += valor;
    }

    sacar(valor) {
        if(this.#saldo >= valor) {

            this.#saldo -= valor;
            return valor;
        }
    }

    transferir(valor, conta) {

        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}