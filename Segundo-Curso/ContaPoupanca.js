import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{

    // Construtor
    constructor(saldoIni, cliente, agencia) { super(saldoIni, cliente, agencia); }
}