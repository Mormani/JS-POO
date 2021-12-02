import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const ccRicardo = new ContaCorrente();
ccRicardo.agencia = 1001;

console.log(ccRicardo);

ccRicardo.depositar(100);
console.log(ccRicardo);

ccRicardo.sacar(50);
console.log(ccRicardo);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;