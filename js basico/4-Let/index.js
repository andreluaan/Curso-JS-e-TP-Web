
let nome = 'João'
var Mnome = 'Maria'




console.log(nome,'nasceu em 1984.')
console.log('Em 2000', nome,'conheceu Maria .')
console.log(nome, 'se casou com Maria em 2012.')
console.log('Maria teve 1 filho com', nome,'em 2015.')
console.log('Filho de',nome ,'e Maria se chama Eduardo.')


// let declara uma variável que pode mudar de valor
let idade = 20;
idade = 21; // reatribuir é permitido
console.log(idade); // 21

// let não pode ser declarada duas vezes no mesmo escopo
// let idade = 30; // Erro: SyntaxError

// let tem escopo de bloco (só existe dentro das chaves)
if (true) {
  let mensagem = "Olá!";
  console.log(mensagem); // Olá!
}
// console.log(mensagem); // Erro: ReferenceError

// let funciona bem em laços
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}


// Não podemos criar variáveis com palabras reservadas
// Variáveis porecisam ter nomes significativos
// Não pode começar o nome de uma Variável com um número
// Não podem conter espaços ou traços
// Ulilizamos camelCase
// js é Case-sensitive - diferencia maisculo de minusculo
// Não podemos redeclarar variáveis com let
// Não utilize VAR utilize LET