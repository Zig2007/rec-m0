let contador = 10;

contador++;    // 11
++contador;    // 12
contador--;    // 11

let resultado = contador++ + --contador;
// resultado = 11 + 11 = 22
// contador final = 11

console.log("Resultado:", resultado);
console.log("Contador final:", contador);