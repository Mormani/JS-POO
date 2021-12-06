export class Cliente {

    // Atributos privados
    #cpf;
    #senha;

    // Setters e Getters
    get cpf() { return this.#cpf }

    // Construtor
    constructor(nome, cpf, senha) {

        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }

    // Metódos Públicos
    autenticar(senha) { return this.#senha == senha; }
}