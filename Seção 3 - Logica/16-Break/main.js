// break e continue
// rode com: node break-continue.js

// 1. break: sai do laço por completo
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log("break:", i); // 0, 1, 2
}

// 2. continue: pula só a iteração atual
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("continue:", i); // 0, 1, 3, 4
}

// 3. Procurando um item: break assim que encontrar
const nomes = ["Ana", "Bruno", "Carla", "Davi"];
for (const nome of nomes) {
  if (nome === "Carla") {
    console.log("Achei:", nome);
    break;
  }
}

// 4. Pulando valores indesejados: continue
const numeros = [1, 2, 3, 4, 5, 6];
for (const n of numeros) {
  if (n % 2 !== 0) continue; // pula os ímpares
  console.log("par:", n); // 2, 4, 6
}

// 5. break em while(true)
let tentativa = 0;
while (true) {
  tentativa++;
  if (tentativa > 3) break;
  console.log("tentativa:", tentativa);
}

// 6. break com rótulo: sai de um laço dentro de outro
externo: for (let a = 0; a < 3; a++) {
  for (let b = 0; b < 3; b++) {
    if (b === 1 && a === 1) break externo;
    console.log("a:", a, "b:", b);
  }
}

// Resumo:
// break    -> encerra o laço
// continue -> vai para a próxima iteração