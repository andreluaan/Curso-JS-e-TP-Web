// switch...case em JavaScript — rode com: node switch.js

// Básico: compara o valor com cada case (usa ===)
function nomeDoDia(numero) {
  switch (numero) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
    default:
      return "Dia inválido";
  }
}
console.log(nomeDoDia(new Date().getDay()));

// break: sem ele, a execução "cai" para o próximo case
const fruta = "banana";
switch (fruta) {
  case "maçã":
    console.log("É uma maçã");
    break;
  case "banana":
    console.log("É uma banana");
    break; // sem esse break, também executaria o próximo case
  default:
    console.log("Fruta desconhecida");
}

// Agrupando cases (fall-through de propósito)
function tipoDeDia(dia) {
  switch (dia) {
    case 0:
    case 6:
      return "Fim de semana";
    default:
      return "Dia útil";
  }
}
console.log(tipoDeDia(6)); // Fim de semana

// switch(true): para testar condições em vez de valores exatos
const nota = 7.5;
switch (true) {
  case nota >= 9:
    console.log("Excelente");
    break;
  case nota >= 7:
    console.log("Bom");
    break;
  default:
    console.log("Precisa melhorar");
}