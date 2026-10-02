// Comentário de uma linha: começa com duas barras

let nome = "Ana"; // Também pode ficar no fim da linha

/*
  Comentário de várias linhas:
  útil para explicações mais longas.
*/

/**
 * Comentário de documentação (JSDoc)
 * @param {number} a - primeiro número
 * @param {number} b - segundo número
 * @returns {number} soma dos dois
 */
function somar(a, b) {
  // console.log("Este código está desativado"); <- comentar código
  return a + b;
}

console.log(somar(2, 3)); // 5