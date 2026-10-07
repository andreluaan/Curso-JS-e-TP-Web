/**
 * OPERADOR TERNÁRIO EM JAVASCRIPT
 *
 * Sintaxe:  condicao ? valorSeVerdadeiro : valorSeFalso
 * É um if/else curto que retorna um valor.
 * Execute com: node operador-ternario.js
 */

// 1) if/else tradicional vs ternário (mesmo resultado)
const idade = 20;

let statusIf;
if (idade >= 18) {
  statusIf = "Maior de idade";
} else {
  statusIf = "Menor de idade";
}
const statusTernario = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log("1) if/else:  ", statusIf);
console.log("1) ternário: ", statusTernario);

// 2) Dentro de template string
const chovendo = true;
console.log(`2) Hoje ${chovendo ? "leve o guarda-chuva" : "aproveite o sol"}!`);

// 3) Em função, com retorno direto
const parOuImpar = (n) => (n % 2 === 0 ? "par" : "ímpar");
console.log("3) 4 é", parOuImpar(4));
console.log("3) 7 é", parOuImpar(7));

// 4) Encadeado (mais de duas opções) - use com moderação
const classificar = (nota) =>
  nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";
console.log("4) Nota 8:", classificar(8));
console.log("4) Nota 3:", classificar(3));

// 5) Valor padrão
const nome = "";
console.log("5)", nome ? `Olá, ${nome}!` : "Olá, visitante!");

// RESUMO
// - Use para decisões simples que geram um valor.
// - Para lógica longa, prefira if/else.