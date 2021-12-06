export class Funcionario {

    // Atributos Privados
    #nome;
    #cpf;
    #salario;
    #bonificacao;

    // Construtor
    constructor(nome, cpf, salario) {

        this.#nome = nome;
        this.#cpf = cpf;
        this.#salario = salario;

        this.#bonificacao = 1;
    }
}