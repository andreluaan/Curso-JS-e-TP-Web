const hora = 10;


if (hora < 12) {
    return console.log('Bom dia')
} 








// IF: executa o bloco se a condição for verdadeira
const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}

// IF / ELSE: caminho alternativo se a condição for falsa
const nota = 5;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// ELSE IF: várias condições em sequência
const temperatura = 25;

if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura < 30) {
  console.log("Agradável");
} else {
  console.log("Quente");
}

// COM OPERADORES LÓGICOS
const logado = true;

if (logado && idade >= 18) {
  console.log("Acesso liberado");
}

// TERNÁRIO: if/else em uma linha
console.log(idade >= 18 ? "Adulto" : "Menor");