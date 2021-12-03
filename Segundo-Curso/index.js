import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const ccRicardo = new ContaCorrente(1001, cliente1);
console.log(ccRicardo);
console.log(ccRicardo.cliente);

ccRicardo.depositar(500);
console.log(`\nValor após depósito para Ricardo: ${ccRicardo.saldo}`);

ccRicardo.sacar(50);
console.log(`Valor após saque do Ricardo: ${ccRicardo.saldo}\n`);

const cPoupRicardo = new ContaPoupanca (50, cliente1, 1001);
console.log(cPoupRicardo);