import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);

const ccRicardo = new ContaCorrente(1001, cliente1);
console.log(ccRicardo);
console.log(ccRicardo.cliente);

ccRicardo.depositar(500);
console.log(`\nValor após depósito para Ricardo: ${ccRicardo.saldo}`);

ccRicardo.sacar(50);
console.log(`Valor após saque do Ricardo: ${ccRicardo.saldo}\n`);

const cliente2 = new Cliente("Alice", 88822233309);
const ccAlice = new ContaCorrente(1002, cliente2);
console.log(ccAlice);
console.log(ccAlice.cliente);

console.log(`\nNúmero de contas correntes: ${ContaCorrente.numDeContas}`);

ccRicardo.transferir(20, ccAlice)

console.log(`\nSaldo após transferência de Ricardo: ${ccRicardo.saldo}`);
console.log(`Saldo após transferência para Alice: ${ccAlice.saldo}`);