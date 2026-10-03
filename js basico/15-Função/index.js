function saudacao(nome) {
    return (`bom dia ${nome}`)
}
console.log(saudacao('André'))


const variavel = saudacao('luiz');
console.log(variavel)

function some(x,y) {
    const resultado = x + y
    return console.log(resultado)
}

some(9,1);
some(1,4)

function soma(x = 1,y = 1) {
    const resultado = x + y
    return console.log(resultado)
}
console.log()
soma()
soma(3)
soma(3, 3)





//--------------------------------------------------------------------------------------------
console.log()
console.log()





// FUNÇÃO SIMPLES: declara e chama
function saudacao() {
  console.log("Olá!");
}
saudacao(); // Olá!

// PARÂMETROS: valores que a função recebe
function apresentar(nome) {
  console.log(`Olá, ${nome}!`);
}
apresentar("Ana"); // Olá, Ana!

// RETORNO: devolve um resultado
function somar(a, b) {
  return a + b;
}
console.log(somar(2, 3)); // 5

// PARÂMETRO PADRÃO: valor usado se nada for enviado
function cumprimentar(nome = "visitante") {
  return `Oi, ${nome}!`;
}
console.log(cumprimentar()); // Oi, visitante!

// FUNÇÃO ANÔNIMA GUARDADA EM VARIÁVEL
const dobro = function (n) {
  return n * 2;
};
console.log(dobro(4)); // 8

// ARROW FUNCTION: forma curta
const triplo = (n) => n * 3;
console.log(triplo(4)); // 12