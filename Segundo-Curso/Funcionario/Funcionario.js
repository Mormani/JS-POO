export class Funcionario {

    // Atributos Privados
    #nome;
    #cpf;
    #salario;
    #bonificacao;
    #senha;

    // Setters e Getters
    get senha() { return this.#senha; }

    // Construtor
    constructor(nome, cpf, salario, bonificacao) {

        this.#nome = nome;
        this.#cpf = cpf;
        this.#salario = salario;
        this.#bonificacao = bonificacao;
    }

    // Metódos Públicos
    cadastrarSenha(senha) {

        this.#senha = senha;
    }

    autenticar(senha) { return this.#senha == senha; }
}