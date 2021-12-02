class ContaCorrente{
    agencia;

    /* Atributo Privado */
    #saldo;

    depositar(valor) { if(valor > 0) this.#saldo += valor; }
    sacar(valor) { if(this.#saldo >= valor) this.#saldo -= valor; }
}