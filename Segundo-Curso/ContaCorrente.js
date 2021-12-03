import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    #cliente
    #saldo = 0;

    static numDeContas = 0;

    set cliente(novoValor) { if(novoValor instanceof Cliente) this.#cliente = novoValor; }
    get cliente() { return this.#cliente }

    get saldo() { return this.#saldo }

    constructor(agencia, cliente) {

        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = 0;
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

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}