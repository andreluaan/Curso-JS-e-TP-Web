// AND (&&): true somente se TODAS as condições forem verdadeiras
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||): true se PELO MENOS UMA condição for verdadeira
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!): inverte o valor
console.log(!true);  // false
console.log(!false); // true

// USO NA PRÁTICA
const idade = 20;
const temCarteira = true;

console.log(idade >= 18 && temCarteira); // true  pode dirigir
console.log(idade < 18 || temCarteira);  // true  basta uma ser verdadeira
console.log(!temCarteira);               // false

// COMBINANDO OPERADORES
const dia = "sábado";
console.log(dia === "sábado" || dia === "domingo"); // true  fim de semana