import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const ccRicardo = new ContaCorrente(cliente1, 1001);
console.log(ccRicardo.cliente);
console.log(`CPF do Cliente ${cliente1.cpf}`);
console.log(`ContaCorrente { saldo: ${ccRicardo.saldo}, agencia: ${ccRicardo.agencia} }`);

ccRicardo.depositar(500);
console.log(`\nValor após depósito para ccRicardo: ${ccRicardo.saldo}`);console.

ccRicardo.sacar(50);
console.log(`Valor após saque do ccRicardo: ${ccRicardo.saldo}\n`);

const cPoupRicardo = new ContaPoupanca (50, cliente1, 1001);
console.log(`ContaPoupanca { saldo: ${cPoupRicardo.saldo}, agencia: ${cPoupRicardo.agencia} }`);