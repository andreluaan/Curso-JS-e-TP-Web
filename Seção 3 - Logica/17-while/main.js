// while e do...while
// rode com: node while.js

// 1. while: testa a condição ANTES de executar
let i = 0;
while (i < 3) {
  console.log("while:", i);
  i++;
}

// 2. do...while: executa ANTES de testar (roda pelo menos 1 vez)
let j = 10;
do {
  console.log("do...while:", j);
  j++;
} while (j < 3); // condição falsa, mas o bloco rodou uma vez

// 3. Contagem regressiva com while
let contagem = 3;
while (contagem > 0) {
  console.log("Contagem:", contagem);
  contagem--;
}
console.log("Fim!");

// 4. Percorrendo um array com while
const frutas = ["maçã", "banana", "uva"];
let k = 0;
while (k < frutas.length) {
  console.log(k, frutas[k]);
  k++;
}

// 5. break: sai do laço (útil com while(true))
let n = 0;
while (true) {
  if (n === 3) break;
  console.log("n:", n);
  n++;
}

// 6. continue: pula para a próxima iteração
let m = 0;
while (m < 5) {
  m++;
  if (m === 3) continue; // pula o 3
  console.log("m:", m);
}

// 7. do...while útil: repetir até obter um valor válido
let tentativa = 0;
do {
  tentativa++;
  console.log("Tentativa", tentativa);
} while (tentativa < 3);

// Cuidado: se a condição nunca ficar falsa, o laço é infinito!