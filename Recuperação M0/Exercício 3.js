let saldo = -150;
let deposito = 200;
let tarifa = 5;

saldo += deposito;
saldo -= tarifa;

let saldoPositivo = saldo >= 0;

console.log("Saldo final:", saldo);
console.log("Saldo positivo?", saldoPositivo);