
// Primitivvos (imutaveis) - String, Number, boooean, undefined,
// null (BigInt, Symbol)

// Referencia (mutavel)  - array, object, function

let nome = 'Luiz';
nome = 'otavio';
console.log(nome); // nome muda seu valor

let a = 'A';
let b = a; // copia do valor
a = 'outra coisa';
console.log(a, b);



// __ nesse caso a aponta para b __

let aa = [1, 2 ,3];
let bb = aa;
// let bb = [...aa];  aqui é uma copia 

console.log(aa, bb);

// quando ocorre mudança no aa o bb tb muda

aa.push(5);
console.log(aa, bb);

// quando ocorre mudança no bb o aa tb muda
bb.pop()
console.log(aa, bb);

