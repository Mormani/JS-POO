import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {

    // Atributos Públicos
    static numDeContas = 0;

    // Construtor
    constructor(cliente, agencia) {

        super(0, cliente, agencia);
        ContaCorrente.numDeContas++;
    }

    // Metódos Públicos
    sacar(valor) {

        const taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}