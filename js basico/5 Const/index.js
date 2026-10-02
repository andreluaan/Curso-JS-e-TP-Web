// Não podemos criar Constante com palabras reservadas
// Constante porecisam ter nomes significativos
// Não pode começar o nome de uma Constante com um número
// Não podem conter espaços ou traços
// Ulilizamos camelCase
// js é Case-sensitive - diferencia maisculo de minusculo
// Não podemos redeclarar Constante com let
// Não utilize VAR utilize LET ou CONST
// Const nao pode ser alterado


// ---------------------------------------------------------------------------------- 



// const nome;  error: Missing initializer in const declaration




const nome = 'joão';
console.log(nome)
// nome = 'José'
// console.log(nome) error: Assignment to constant variable.
console.log()





const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero 
console.log(resultado)

const resultadoDuplicado = resultado * 2
console.log(resultadoDuplicado)

let resultadoTriplicado = resultado * 3
console.log(resultadoTriplicado)
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado) // perde o sentido

console.log(typeof(primeiroNumero)) //tipo number




console.log()


// const também tem escopo de bloco
if (true) {
  const msg = "Olá!";
  console.log(msg); // Olá!
}
// console.log(msg); // Erro: ReferenceError

// Atenção: objetos e arrays const podem ter o conteúdo alterado
const frutas = ["maçã"];
frutas.push("uva"); // permitido
console.log(frutas); // ["maçã", "uva"]