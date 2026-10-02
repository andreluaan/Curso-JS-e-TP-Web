const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80; // <-- NESTE LOCAL
let imc; // peso / (altura * altura)
let anoNascimento;


/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/


imc = peso / (alturaEmCm * alturaEmCm)

anoNascimento = 2026 - idade

console.log(imc)
console.log(anoNascimento)

console.log()
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmCm} de altura e seu IMC é de ${imc} Luiz Otávio nasceu em ${anoNascimento}`)

