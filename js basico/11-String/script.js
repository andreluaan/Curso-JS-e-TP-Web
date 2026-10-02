// CRIAÇÃO: aspas simples, duplas ou crase
const nome = "Ana";
const cidade = 'Juazeiro';
const frase = `Olá, ${nome}!`; // template string com variável
console.log(frase); // Olá, Ana!

// TAMANHO E ACESSO
console.log(nome.length); // 3
console.log(nome[0]);     // A

// CONCATENAÇÃO
console.log(nome + " de " + cidade); // Ana de Juazeiro

// MAIÚSCULAS E MINÚSCULAS
console.log(nome.toUpperCase()); // ANA
console.log(nome.toLowerCase()); // ana

// BUSCA
const texto = "JavaScript é legal";
console.log(texto.includes("legal")); // true
console.log(texto.indexOf("Script")); // 4

// EXTRAÇÃO E SUBSTITUIÇÃO
console.log(texto.slice(0, 4));              // Java
console.log(texto.replace("legal", "top"));  // JavaScript é top

// LIMPEZA E DIVISÃO
console.log("  oi  ".trim());       // oi
console.log("a,b,c".split(","));   // ["a", "b", "c"]