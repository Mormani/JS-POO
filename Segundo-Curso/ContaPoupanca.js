import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{

    // Construtor
    constructor(saldoIni, cliente, agencia) { super(saldoIni, cliente, agencia); }

    // Metódos Públicos
    sacar(valor) {

        let taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}