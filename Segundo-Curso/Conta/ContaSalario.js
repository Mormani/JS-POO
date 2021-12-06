import {Cliente} from "../Cliente.js";
import {Conta} from "./Conta.js";

export class ContaSalario extends Conta {

    // Construtor
    constructor(cliente, agencia) { if(cliente instanceof Cliente) super(0, cliente, agencia); }

    // Metódos Públicos
    sacar(valor) {

        const taxa = 1.01;
        super._sacar(valor, taxa);
    }
}