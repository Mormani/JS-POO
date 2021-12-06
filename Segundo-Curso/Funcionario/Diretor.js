import {Funcionario} from "./Funcionario.js";

export class Diretor extends Funcionario {

    // Construtor
    constructor(nome, cpf, salario) { super(nome, cpf, salario, 2); }
}