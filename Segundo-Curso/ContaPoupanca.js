import { Cliente } from "./Cliente.js";

export class ContaPoupanca {

    #saldo = 0;
    #cliente;
    #agencia;

    constructor(saldoIni, cliente, agencia) {

        if(cliente instanceof Cliente) { this.#cliente = cliente; }

        this.#saldo = saldoIni;
        this.#agencia = agencia;
    }

    depositar(valor) { if(valor > 0) this.#saldo += valor; }
    sacar(valor) { if(this.#saldo >= valor) this.#saldo -= valor; }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}