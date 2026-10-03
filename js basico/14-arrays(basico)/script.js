
// CRIAÇÃO E ACESSO
const alunos = ['Luiz', 'Maria', 'João'];
console.log("Acesso direto:   " + alunos[1]);

// Modificar Array
alunos[0] = 'André';
console.log("Modificação direta:   " + alunos);

// Adicionando de direto pelo index
alunos[3] = 'guilherme';
console.log("Adição direta:   " + alunos);

// Adição por Função
alunos.push('otario');   // adiciona no fim
console.log("push():   " + alunos);
alunos.unshift('aidento'); // adiciona no inicio levando todos os outros itens pra frente
console.log("unshift():   " + alunos)


// Remove
alunos.pop();    // remove do fim
console.log("pop():   " + alunos)
alunos.unshift // remove do inicio
console.log("shift():   " + alunos)

// salvando a modificação do array em uma constante
const removido = alunos.pop()
console.log(removido + "\n")


// CRIAÇÃO E ACESSO
const frutas = ["maçã", "banana", "uva"];
console.log(frutas[0]);     // maçã
console.log(frutas.length); // 3

// ADICIONAR E REMOVER NO FINAL
frutas.push("pera");  // adiciona no final
frutas.pop();         // remove o último

// ADICIONAR E REMOVER NO INÍCIO
frutas.unshift("kiwi"); // adiciona no início
frutas.shift();         // remove o primeiro

// BUSCA
console.log(frutas.includes("uva")); // true
console.log(frutas.indexOf("uva"));  // 2

// PERCORRER
frutas.forEach((fruta) => console.log(fruta));

// TRANSFORMAR E FILTRAR
const numeros = [1, 2, 3, 4];
console.log(numeros.map((n) => n * 2));      // [2, 4, 6, 8]
console.log(numeros.filter((n) => n > 2));   // [3, 4]

// JUNTAR EM TEXTO
console.log(frutas.join(", ")); // maçã, banana, uva
