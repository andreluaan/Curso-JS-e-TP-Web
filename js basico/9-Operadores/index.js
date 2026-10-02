// ARITMÉTICOS: fazem cálculos
const a = 10;
const b = 3;

console.log(a + b);  // 13   soma
console.log(a - b);  // 7    subtração
console.log(a * b);  // 30   multiplicação
console.log(a / b);  // 3.33 divisão
console.log(a % b);  // 1    resto da divisão
console.log(a ** b); // 1000 potência

// ATRIBUIÇÃO: guardam ou atualizam um valor
let x = 5;

x += 2;  // x = x + 2
console.log(x); // 7

x -= 3;  // x = x - 3
console.log(x); // 4

x *= 5;  // x = x * 5
console.log(x); // 20

x /= 4;  // x = x / 4
console.log(x); // 5

x %= 3;  // x = x % 3
console.log(x); // 2

// INCREMENTO E DECREMENTO: somam ou subtraem 1
let n = 0;

n++;
console.log(n); // 1

n--;
console.log(n); // 0

console.log(n++); // 0  usa o valor e depois incrementa
console.log(++n); // 2  incrementa e depois usa o valor