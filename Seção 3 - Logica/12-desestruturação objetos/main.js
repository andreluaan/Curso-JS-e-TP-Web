// Desestruturação de objetos — rode com: node desestruturacao-objetos.js

const pessoa = {
  nome: "Ana",
  idade: 28,
  endereco: { cidade: "Juazeiro do Norte", estado: "CE" },
};

// 1. Básico: extrai propriedades pelo nome
const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 28

// 2. Renomear: propriedade: novoNome
const { nome: nomeCompleto } = pessoa;
console.log(nomeCompleto); // Ana

// 3. Valor padrão: usado se a propriedade for undefined
const { profissao = "Não informada" } = pessoa;
console.log(profissao); // Não informada

// 4. Aninhado
const {
  endereco: { cidade, estado },
} = pessoa;
console.log(cidade, estado); // Juazeiro do Norte CE

// 5. Rest: junta o restante das propriedades em um novo objeto
const { nome: n, ...resto } = pessoa;
console.log(resto); // { idade: 28, endereco: {...} }

// 6. Em parâmetros de função
function saudar({ nome, idade = 0 }) {
  return `Olá, ${nome}! Idade: ${idade}`;
}
console.log(saudar(pessoa));

// 7. Atribuição a variáveis já declaradas: precisa de parênteses
let a, b;
({ a, b } = { a: 1, b: 2 });
console.log(a, b); // 1 2