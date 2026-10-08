// 1. Básico: percorre as CHAVES (nomes das propriedades) de um objeto
const pessoa = { nome: "Ana", idade: 28, cidade: "Juazeiro do Norte" };
for (const chave in pessoa) {
  console.log(chave, "=", pessoa[chave]);
}

// 2. As chaves são sempre strings
const numeros = { 1: "um", 2: "dois" };
for (const chave in numeros) {
  console.log(typeof chave); // "string"
}

// 3. Em arrays: percorre os ÍNDICES (como strings), não os valores
const frutas = ["maçã", "banana", "uva"];
for (const indice in frutas) {
  console.log(indice, frutas[indice]); // "0" maçã, "1" banana...
}

// 4. Inclui propriedades herdadas (protótipo)
function Animal() {
  this.nome = "Rex";
}
Animal.prototype.especie = "cão";

const rex = new Animal();
for (const chave in rex) {
  console.log("herdada incluída:", chave); // nome, especie
}

// 5. hasOwnProperty / Object.hasOwn: filtra só as propriedades próprias
for (const chave in rex) {
  if (Object.hasOwn(rex, chave)) {
    console.log("própria:", chave); // só nome
  }
}

// 6. Alternativa moderna: Object.keys / Object.entries
for (const [chave, valor] of Object.entries(pessoa)) {
  console.log(chave, valor);
}

// Resumo:
// for...in -> chaves de OBJETOS
// for...of -> valores de arrays, strings, Map, Set