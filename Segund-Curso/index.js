import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);

const ccRicardo = new ContaCorrente(1001, cliente1);
console.log(ccRicardo);
console.log(ccRicardo.cliente);

console.log(ccRicardo);

ccRicardo.depositar(100);
console.log(`Valor após depósito: ${ccRicardo.saldo}`);

ccRicardo.sacar(50);
console.log(`Valor após saque: ${ccRicardo.saldo}`);

const cliente2 = new Cliente("Alice", 88822233309);
const ccAlice = new ContaCorrente(1002, cliente2);

console.log(`Número de contas correntes: ${ContaCorrente.numDeContas}`);