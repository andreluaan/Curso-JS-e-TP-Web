// Laços for em JavaScript — rode com: node for.js

// 1. for clássico: inicialização; condição; incremento
for (let i = 0; i < 3; i++) {
  console.log("for:", i); // 0, 1, 2
}

// 2. Contagem regressiva e passo diferente
for (let i = 10; i > 0; i -= 3) {
  console.log("regressivo:", i); // 10, 7, 4, 1
}

// 3. Percorrendo um array pelo índice
const frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(i, frutas[i]);
}

// 4. for...of: percorre os VALORES (arrays, strings, Map, Set)
for (const fruta of frutas) {
  console.log("of:", fruta);
}

// 5. for...in: percorre as CHAVES de um objeto
const pessoa = { nome: "Ana", idade: 28 };
for (const chave in pessoa) {
  console.log("in:", chave, "=", pessoa[chave]);
}

// 6. Com índice e valor ao mesmo tempo
for (const [indice, fruta] of frutas.entries()) {
  console.log(indice, fruta);
}

// 7. break (sai do laço) e continue (pula a iteração)
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // pula o 2
  if (i === 5) break; // para no 5
  console.log("controle:", i); // 0, 1, 3, 4
}

// Dica: evite for...in em arrays (use for...of ou forEach)