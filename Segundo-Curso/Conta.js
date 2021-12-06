import {Cliente} from "./Cliente.js";

export class Conta {

    // Atributos privados
    #saldo = 0;
    #cliente;
    #agencia;

    // Setters e Getters
    set cliente(novoValor) { if(novoValor instanceof Cliente) this.#cliente = novoValor; }
    get cliente() { return this.#cliente }

    set saldo(novoSaldo) { this.#saldo = novoSaldo }
    get saldo() { return this.#saldo }

    get agencia() { return this.#agencia }

    // Construtor
    constructor(saldoIni, cliente, agencia) {

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um Objeto da Classe Conta, diretamente.");
        }

        if(cliente instanceof Cliente)
            this.#cliente = cliente;
        else
            return;

        this.#saldo = saldoIni;
        this.#agencia = agencia;
    }

    // Metódos Públicos
    depositar(valor) {
        if(valor <= 0) { return; }
        return this.#saldo += valor;
    }

    sacar(valor) {

        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    // Metódos Protegidos (Convenção)
    _sacar(valor, taxa) {

        const valorSacado = valor * taxa;

        if(this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }
}