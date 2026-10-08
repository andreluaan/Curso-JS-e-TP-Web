// Diferença entre let e var

// 1. Escopo: var é de função, let é de bloco
if (true) {
  var comVar = "visível fora do bloco";
  let comLet = "só existe dentro do bloco";
}
console.log(comVar); // funciona
// console.log(comLet); // ReferenceError: comLet is not defined

// 2. Em loops: var compartilha a mesma variável, let cria uma por iteração
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0); // 0, 1, 2
}

// 3. Hoisting: var sobe como undefined, let fica na "zona morta temporal"
console.log(a); // undefined
var a = 1;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

// 4. Redeclaração: var permite, let não
var x = 1;
var x = 2; // ok
let y = 1;
// let y = 2; // SyntaxError: Identifier 'y' has already been declared

// 5. Variáveis globais (no navegador): var vira propriedade de window, let não
// var global = 1;  -> window.global === 1
// let global2 = 1; -> window.global2 === undefined

// Resumo: prefira const por padrão, use let quando precisar reatribuir
// e evite var em código novo.