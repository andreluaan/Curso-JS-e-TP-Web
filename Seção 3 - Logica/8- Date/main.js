// Date() em JavaScript — rode com: node date.js

// Criando datas
const agora = new Date();
const iso = new Date("2026-10-08");
const manual = new Date(2026, 9, 8, 14, 30); // mês começa em 0 (9 = outubro)
const ms = Date.now();

// Lendo partes
console.log("Ano:", agora.getFullYear());
console.log("Mês (0-11):", agora.getMonth());
console.log("Dia do mês:", agora.getDate());
console.log("Dia da semana (0 = domingo):", agora.getDay());
console.log("Hora:", agora.getHours());
console.log()

// Formatando
console.log(manual.toISOString());
console.log(manual.toLocaleDateString("pt-BR"));
console.log(manual.toLocaleString("pt-BR"));
console.log()


// Somando 7 dias
const daqui7 = new Date(agora);
daqui7.setDate(daqui7.getDate() + 7);
console.log("Daqui a 7 dias:", daqui7.toLocaleDateString("pt-BR"));

// Diferença em dias
const dias = (daqui7 - agora) / (1000 * 60 * 60 * 24);
console.log("Diferença em dias:", Math.round(dias));

// Data inválida
console.log("Válida?", !isNaN(new Date("abc"))); // false