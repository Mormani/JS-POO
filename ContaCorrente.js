export class ContaCorrente {
    agencia;

    /* Atributo Privado */
    #saldo;

    depositar(valor) {

        if(valor > 0)
            this.#saldo += valor;

        console.log(`Valor após deposito: ${this.#saldo}`);
    }

    sacar(valor) {

        if(this.#saldo >= valor)
            this.#saldo -= valor;

        console.log(`Valor após saque: ${this.#saldo}`);
    }
}