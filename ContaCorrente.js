export class ContaCorrente {
    agencia;

    /* Atributo Privado */
    #saldo = 0;

    depositar(valor) {

        if(valor > 0)
            this.#saldo += valor;

        console.log(`Valor após deposito: ${this.#saldo}\n`);
    }

    sacar(valor) {

        if(this.#saldo >= valor)
            this.#saldo -= valor;

        console.log(`Valor após saque: ${this.#saldo}\n`);
    }
}