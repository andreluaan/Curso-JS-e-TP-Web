// Operadores de comparação sempre retornam true ou false

// IGUALDADE ESTRITA: compara valor e tipo (recomendado)
console.log(5 === 5);   // true
console.log(5 === "5"); // false

// IGUALDADE SIMPLES: compara só o valor (evite)
console.log(5 == "5");  // true

// DIFERENTE
console.log(5 !== "5"); // true  compara valor e tipo
console.log(5 != "5");  // false compara só o valor

// MAIOR E MENOR
console.log(10 > 5);  // true
console.log(10 < 5);  // false

// MAIOR OU IGUAL, MENOR OU IGUAL
console.log(10 >= 10); // true
console.log(10 <= 9);  // false

// USO NA PRÁTICA
const idade = 18;
console.log(idade >= 18); // true


// fazendo com variavel

const comparacao = 10 >= 5
console.log(comparacao)