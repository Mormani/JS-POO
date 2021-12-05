export class Cliente {

    // Atributos privados
    #cpf;

    // Setters e Getters
    get cpf() { return this.#cpf }

    // Construtor
    constructor(nome, cpf) { this.nome = nome; this.#cpf = cpf; }
}