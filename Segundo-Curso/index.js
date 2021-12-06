import {Cliente} from "./Cliente.js"
import {Diretor} from "./Funcionario/Diretor.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {SistemaAutenticação} from "./SistemaAutenticacao.js";

// console.log(`CPF do Cliente ${cliente1.cpf}`);
// console.log(`ContaCorrente { saldo: ${ccRicardo.saldo}, agencia: ${ccRicardo.agencia} }`);
// console.log(`Valor após saque do ccRicardo: ${ccRicardo.saldo}\n`);
// console.log(`ContaSalario { saldo: ${csRicardo.saldo}, agencia: ${csRicardo.agencia} }`);

const diretor = new Diretor("Rodrigo", 12345678900, 10000);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 12345678901, 5000);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");

const estaLogadoD = SistemaAutenticação.login(diretor, "123456");
const estaLogadoG = SistemaAutenticação.login(gerente, "123");
const estaLogadoC = SistemaAutenticação.login(cliente, "456");
console.log(estaLogadoD, estaLogadoG, estaLogadoC);